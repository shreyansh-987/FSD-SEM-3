import fs from 'fs';

fs.writeFileSync(
    'example.txt',
    'This is experiment 2 in FSD workshop',
    'utf8'
);

console.log('Create file run successfully');

// const data = fs.readFileSync('example.txt', 'utf8');
// console.log('File content:', data);

fs.appendFileSync('example.txt', '\nThis is appended text.', 'utf8');
console.log('example.txt file updated successfully');

fs.appendFileSync('example.txt', '\nThis is another appended text.', 'utf8');
console.log('example.txt file updated successfully');

fs.unlinkSync('example.txt');
console.log('example.txt file is deleted');


// create a new folder 
fs.mkdirSync('new-folder');
console.log('New folder created successfully');

fs.rmdirSync ('new-folder');
console.log('New folder deleted successfully');

if(fs.existsSync('example.txt')) {
  console.log('example.txt file exists');
}
else{
  console.log('example.txt file does not exist');
}

