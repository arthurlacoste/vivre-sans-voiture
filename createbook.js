const tampax = require('tampax');
const frontMatter = require('yaml-front-matter');
const fs = require('fs');
const count = require('word-count');

let buff = `% Vivre sans voiture
% Arthur Lacoste
`;

tampax.yamlParseFile('_data/nav.yml', {}, {}, (err, data) => {
  if (err) {
    throw err;
  }
  const nav = data.toc;

  for(var index in nav) {
   if (nav.hasOwnProperty(index)) {
      buff += `\n\n# ${nav[index].title}\n\n<div style="page-break-after: always;"></div>`;
      const results = frontMatter.loadFront(nav[index].file);
      buff += results.__content;
   }
  }

  fs.writeFile("dist/all.md", buff, function(err) {
     if(err) {
         return console.log(err);
     }
     console.log('Nombre de mots :', count(buff));
     console.log("The file was saved!");
   });
});
