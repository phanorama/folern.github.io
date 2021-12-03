const start_btn = document.querySelector(".start_btn button");
const prev_btn = document.querySelector(".prev_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

const description_box = document.querySelector(".description_box");
const next_description = document.querySelector(".next_btn_description");
const prev_description = document.querySelector(".prev_btn_description");

const closing_box = document.querySelector(".closing_box");
const restart = document.querySelector(".buttons .restart_descrip");
/////////////////////////////////////////////////////////////
//©Copyright-2021 R1N NY44 - Folern, No Rights Reserved.  //
//GitHub  : https://github.com/R1N-NY44                  //
//////////////////////////////////////////////////////////

// Menekan tombol "Mulai belajar" akan menampilkan pendahuluan
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box (css `activeInfo`)
};

// Tombol keluar di Pendahuluan
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box (css `activeInfo`)
};

// Masuk ke materi pertama, menutup pendahuluan lalu memunculkan box materi
continue_btn.onclick = ()=>{
  description_box.classList.add("activeDescription");//menampilkan Deskripsi
  description_count = 0;
  showDescription(description_count);//memanggil fungsi deskripsi
  info_box.classList.remove("activeInfo");
  info_box.classList.remove("activeClosing");
};



restart.onclick = ()=>{
  endClosing()
  description_count = 0;
  showDescription(description_count);//memanggil fungsi deskripsi
  info_box.classList.remove("activeInfo");
  description_box.classList.add("activeDescription");//menampilkan Deskripsi
}





//di hitung dari deskripsi 0
let description_count = 0;


// Prev, kembali ke materi sebelumnya
prev_description.onclick = ()=>{
  if(description_count == 0) { //jika nilai soal sudah mencapai 0 maka akan kembali ke "Pendahuluan"
    description_box.classList.remove("activeDescription");//menutup Deskripsi
    info_box.classList.add("activeInfo");//menampilkan Pendahuluan
  }else if (description_count < des.length - 1){
    description_count--;//untuk kembali, maka nilai di kurang [x-1]
    showDescription(description_count);
  }
};


//saat menekan tombol next materi, akan menampilkan materi ke 2, 3, dst
next_description.onclick = ()=>{
  if(description_count < des.length - 1){
    description_count++;
    showDescription(description_count);
  }else{
    showClosing()
    description_box.classList.remove("activeDescription");
  }
};


function showDescription(index){
  const description_title = document.querySelector(".description_title");
  const description = document.querySelector(".description");
  let descrip = '<span>'+ des[index].numb + ". " +des[index].description +'</span>';
  let title = des[index].title;
  description.innerHTML = descrip;
  description_title.innerHTML = title;
}

function showClosing(){
  closing_box.classList.add("activeClosing");
}

function endClosing(){
  closing_box.classList.remove("activeClosing");
}
