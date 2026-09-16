import fs from 'fs';

// 1. Create / Write file
fs.writeFile(
    'sample.txt',
    'Welcome to full stack development workshop 2',
    (err) => {
        if (err) {
            console.log('Error creating file:', err);
            return;
        }

        console.log('1. File created successfully!');

        // 2. Read file
        fs.readFile('sample.txt', 'utf8', (err, data) => {
            if (err) {
                console.log('Error reading file:', err);
                return;
            }

            console.log('2. File Content:');
            console.log(data);

            // 3. Append to file
            fs.appendFile(
                'sample.txt',
                '\nSemester: 3',
                (err) => {
                    if (err) {
                        console.log('Error updating file:', err);
                        return;
                    }

                    console.log('3. File updated successfully!');

                    // 4. Delete file
                    fs.unlink('sample.txt', (err) => {
                        if (err) {
                            console.log('Error deleting file:', err);
                            return;
                        }

                        console.log('4. File deleted successfully!');
                    });
                }
            );
        });
    }
);