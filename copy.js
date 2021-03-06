const fs = require('fs');

const freebsdPath = '/mnt/ddbfa0de-ddc0-4f61-9bf3-7e162c08248d/Projetos/Estudos/Ucsal/Evolução de Software/freebsd/';
const output = './1'
const files = [
  'sys/kern/vfs_subr.c',
  'sys/amd64/amd64/pmap.c',
  'sys/amd64/amd64/machdep.c',
  'sys/vm/vm_page.c',
  'sys/kern/vfs_bio.c',
  'sys/kern/vfs_syscalls.c',
  'sys/kern/kern_descrip.c',
  'sys/vm/vm_map.c',
  'sys/vm/vm_object.c',
  'sys/netinet/tcp_input.c',
  'sys/net/if.c',
];
files.forEach(path => {
  const filename = path.split('/').pop();
  fs.copyFile(`${freebsdPath}/${path}`, `${output}/${filename}`, (error) => {
    if (error) throw error;
    console.log(`${path} completed`);
  });
})
