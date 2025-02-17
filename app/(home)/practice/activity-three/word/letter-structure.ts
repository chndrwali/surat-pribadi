/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';
import { DecorationSet, Decoration } from 'prosemirror-view';
import { Node as ProseMirrorNode } from 'prosemirror-model';

interface LetterError {
  line: number;
  message: string;
  from: number;
  to: number;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    letterStructure: {
      validateStructure: () => ReturnType;
    };
  }
}

export const LetterStructureKey = new PluginKey('letterStructure');

export const LetterStructure = Extension.create({
  name: 'letterStructure',

  addStorage() {
    return {
      errors: [] as LetterError[],
    };
  },

  addProseMirrorPlugins() {
    const extension = this;

    return [
      new Plugin({
        key: LetterStructureKey,
        state: {
          init() {
            return DecorationSet.empty;
          },
          apply(tr, oldState) {
            const meta = tr.getMeta(LetterStructureKey);
            if (meta?.errors) {
              const decorations: Decoration[] = [];
              meta.errors.forEach((error: LetterError) => {
                decorations.push(
                  Decoration.inline(error.from, error.to, {
                    class: 'letter-error',
                    'data-error': error.message,
                  })
                );
              });
              return DecorationSet.create(tr.doc, decorations);
            }
            return oldState.map(tr.mapping, tr.doc);
          },
        },
        props: {
          decorations(state) {
            return this.getState(state);
          },
        },
        appendTransaction: (transactions, oldState, newState) => {
          if (!transactions.some((transaction) => transaction.docChanged)) {
            return null;
          }

          const errors: LetterError[] = [];
          const doc = newState.doc;
          let currentSection = 0;

          const findLineNumber = (pos: number): number => {
            let line = 0;
            doc.nodesBetween(0, pos, (node, nodePos) => {
              if (node.type.name === 'paragraph') {
                line++;
              }
              return true;
            });
            return line;
          };

          doc.descendants((node: ProseMirrorNode, pos: number) => {
            if (node.type.name === 'paragraph') {
              const text = node.textContent.toLowerCase();
              const from = pos;
              const to = pos + node.nodeSize;
              const line = findLineNumber(pos);

              // Check date format (DD/MM/YYYY, DD-MM-YYYY, or "Place, DD Month YYYY")
              if (
                currentSection === 0 &&
                !text.match(/[A-Za-zÀ-ÖØ-öø-ÿ\s]+,\s\d{2}[-/]\d{2}[-/]\d{4}/) &&
                !text.match(/[A-Za-zÀ-ÖØ-öø-ÿ\s]+,\s\d{1,2}\s(?:Jan(?:uari)?|Feb(?:ruari)?|Mar(?:et)?|Apr(?:il)?|Mei|Jun(?:i)?|Jul(?:i)?|Ags(?:ustus)?|Sep(?:tember)?|Okt(?:ober)?|Nov(?:ember)?|Des(?:ember)?)\s\d{4}/i)
              ) {
                errors.push({
                  line,
                  message: 'Tanggal harus berada di bagian atas surat dan memiliki format yang valid',
                  from,
                  to,
                });
              }

              // Check opening greeting
              if (currentSection === 2 && !text.includes('kepada yth') && !text.includes('dear')) {
                errors.push({
                  line,
                  message: 'Salam pembuka diperlukan (contoh: Kepada Yth.)',
                  from,
                  to,
                });
              }
              if (currentSection === 6 && !text.includes('assalamu`alaikum')) {
                errors.push({
                  line,
                  message: 'Salam diperlukan (contoh: assalamu`alaikum)',
                  from,
                  to,
                });
              }

              // Check letter content
              if (currentSection === 8 && text.length < 50) {
                errors.push({
                  line,
                  message: 'Paragraf satu terlalu pendek',
                  from,
                  to,
                });
              }
              if (currentSection === 9 && text.length < 50) {
                errors.push({
                  line,
                  message: 'Paragraf dua terlalu pendek',
                  from,
                  to,
                });
              }

              // Check closing
              if (currentSection === 10 && !text.includes('wassalamu`alaikum') && !text.includes('salam') && !text.includes('salam')) {
                errors.push({
                  line,
                  message: 'Salam penutup diperlukan (contoh: Wassalamu`alaikum / salam)',
                  from,
                  to,
                });
              }

              // Check signature
              if (currentSection === 11 && text.length < 5) {
                errors.push({
                  line,
                  message: 'Tanda tangan dan nama pengirim diperlukan',
                  from,
                  to,
                });
              }

              currentSection++;
            }
          });

          extension.storage.errors = errors;
          const tr = newState.tr;
          tr.setMeta(LetterStructureKey, { errors });
          return tr;
        },
      }),
    ];
  },

  addCommands() {
    return {
      validateStructure:
        () =>
        ({ state, dispatch }) => {
          if (dispatch) {
            const tr = state.tr;
            tr.setMeta(LetterStructureKey, {
              errors: this.storage.errors,
            });
            dispatch(tr);
          }
          return true;
        },
    };
  },
});
