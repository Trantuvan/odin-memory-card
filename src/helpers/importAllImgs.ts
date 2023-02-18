import uuid from 'react-uuid';

async function importAllImgs(): Promise<{ id: string; urlObj: URL }[]> {
  const modules = import.meta.glob('../assets/imgs/cards/*.png');
  const gallery: Array<{ id: string; urlObj: URL }> = [];

  for (const path in modules) {
    if (Object.hasOwn(modules, path)) {
      modules[path]().then(() => {
        const p = new URL(path, import.meta.url);
        gallery.push({ id: uuid(), urlObj: p });
      });
    }
  }

  return gallery;
}

export default importAllImgs;
