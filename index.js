const fs = require('fs');

/********************/

// Добавление в существующий файл или добавление в созданный файл

// fs.appendFile('text.txt', 'Hello content!', function (err) {
//   if (err) throw err;
// console.log('Saved!');
// });

/********************/

// Заменяет указанный файл и содержимое. Если файл не существует, будет создан новый файл.

// fs.writeFile('text3.txt', 'Hello con234567tent!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

/********************/

// Удаляет файл

// fs.unlink('text3.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

/********************/

// Переименовываем файл

// fs.rename('text.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });

/********************/

//Копирование файла
//Еслм файл уже есть, то он перезапишется
// Работает и с картинками
//           копируем файл       скопированый файл
// fs.copyFile("file/text2.txt", "public/img/copied_file.txt", (err) => {
//   if (err) console.log("Error Found:", err);
// });
