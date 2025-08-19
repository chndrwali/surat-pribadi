/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-this-alias */
import { Extension } from '@tiptap/react';
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
              if (currentSection === 0 && text.length < 15) {
                errors.push({
                  line,
                  message: 'kop surat harus memiliki logo lembaga atau institusi perusahaan',
                  from,
                  to,
                });
              }
              if (currentSection === 1 && text.length < 10) {
                errors.push({
                  line,
                  message: 'Kop surat harus mencantumkan nama institusi',
                  from,
                  to,
                });
              }
              if (currentSection === 2 && text.length < 10) {
                errors.push({
                  line,
                  message: 'Kop surat harus mencantumkan alamat ',
                  from,
                  to,
                });
              }
              if (currentSection === 3 && !text.includes('email') && !text.includes('hp')) {
                errors.push({
                  line,
                  message: 'Kop surat harus mencantumkan email & no hp',
                  from,
                  to,
                });
              }
              if (
                currentSection === 5 &&
                !text.match(/[A-Za-zÀ-ÖØ-öø-ÿ\s]+,\s\d{2}[-/]\d{2}[-/]\d{4}/) &&
                !text.match(/[A-Za-zÀ-ÖØ-öø-ÿ\s]+,\s\d{1,2}\s(?:Jan(?:uari)?|Feb(?:ruari)?|Mar(?:et)?|Apr(?:il)?|Mei|Jun(?:i)?|Jul(?:i)?|Ags(?:ustus)?|Sep(?:tember)?|Okt(?:ober)?|Nov(?:ember)?|Des(?:ember)?)\s\d{4}/i)
              ) {
                errors.push({
                  line,
                  message: 'Tempat dan Tanggal harus berada di bagian atas surat dan ditulis dibagian kanan',
                  from,
                  to,
                });
              }
              if (currentSection === 6 && !text.match(/[0-9]/)) {
                errors.push({
                  line,
                  message: 'Nomor surat harus berada dibagian atas surat dan ditulis dibagian kiri dengan memasukan Kode nomor surat, Nama lembaga yang mengeluarkan surat,bulan dituliskan dengan angka romawi serta tahun',
                  from,
                  to,
                });
              }
              if (currentSection === 7 && !node.textContent.includes('Lampiran')) {
                errors.push({
                  line,
                  message: 'Lampiran merupakan Dokumen tambahan yang dilampirkan atau disertakan pada dokumen utama untuk memberikan informasi pendukung. Jika terdapat 1 dokumen maka tulis 1, jika tidak ada lampiran maka tulis –',
                  from,
                  to,
                });
              }
              if (currentSection === 8 && !node.textContent.includes('Perihal') && !text.includes('permohonan izin kegiatan')) {
                errors.push({
                  line,
                  message: 'Perihal menunjukkan isi atau inti dari surat secara singkat, jika surat yang dibuat mengenai izin kegiatan maka tulis “permohonan izin kegiatan”',
                  from,
                  to,
                });
              }

              // Check opening greeting
              if (currentSection === 10 && !node.textContent.includes('Yth.')) {
                errors.push({
                  line,
                  message: 'Masukan alamat tujuan contoh Yth. Ibu Aminah di tempat. Huruf Y pada kata “Yth” harus diawali dengan huruf kapital, Setelah kata Yth beri tanda titik (.)',
                  from,
                  to,
                });
              }
              if (currentSection === 14 && !node.textContent.includes("Assalamu'alaikum,") && !node.textContent.includes('Dengan hormat')) {
                errors.push({
                  line,
                  message: 'Salam pembuka diperlukan (contoh: assalamu`alaikum / dengan hormat) diakhiri dengan koma ',
                  from,
                  to,
                });
              }

              // Check letter content
              if (currentSection === 15 && text.length < 50) {
                errors.push({
                  line,
                  message: 'Paragraf pembuka pada isi surat dinas adalah bagian awal dari isi surat yang berfungsi sebagai pengantar atau penjelasan. Jika diawal kalimat harus menggunakan huruf kapital.',
                  from,
                  to,
                });
              }
              if (currentSection === 16 && text.length < 25) {
                errors.push({
                  line,
                  message: 'Isi surat berisi bagian utama dari surat yang berisi informasi penting yang ingin disampaikan oleh pengirim kepada penerima.',
                  from,
                  to,
                });
              }
              if (currentSection === 21 && text.length < 15) {
                errors.push({
                  line,
                  message: 'Penutup berisi tentang ucapan terima kasih yang menandai selesainya penyampaian informasi',
                  from,
                  to,
                });
              }

              // Check closing
              if (currentSection === 22 && !node.textContent.includes('Wassalamualaikum Warahmatullahi Wabarakatuh,') && !node.textContent.includes('Hormat kami,') && !node.textContent.includes('Salam hormat,')) {
                errors.push({
                  line,
                  message: 'Salam penutup diperlukan (contoh: Wassalamualaikum Warahmatullahi Wabarakatuh /Hormat kami/Salam hormat) diakhiri dengan koma',
                  from,
                  to,
                });
              }

              // Check signature
              if (currentSection === 23 && text.length < 5) {
                errors.push({
                  line,
                  message: 'Tanda tangan dan nama pengirim diperlukan, ditulis sebelah kanan',
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
