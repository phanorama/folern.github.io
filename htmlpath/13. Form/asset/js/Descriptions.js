//Materi Form HTML

let des = [
{
numb: 1,
title:"Form HTML",
description: "Tag &lt;form&gt; element digunakan untuk menampung berbagai element yang berhubungan dengan sebuah form. <br> <br>Dalam sebuah form biasanya terdapat input (control) dan element lainnya yang dapat dimodifikasi kemudian ditulis untuk dikirim pada sebuah server untuk diproses untuk mendapatkan informasi tertentu dari user yang memasukkan data di form tersebut."
},
{
numb: 2,
title:"Element dalam Form",
description: "Element yang dapat digunakan untuk melengkapi sebuah form, diantaranya adalah sebagai berikut: <br>button, fieldset, input, label, legend, optgroup, option, select, textarea, dll"
},
{
numb: 3,
title:"Action URL",
description: "Atribut <b>action</b> Menentukkan alamat (URL) yang memproses data form ketika dikirim. Tindakan ini dapat diganti dengan menyebutkan attribute formaction pada &lt;button&gt; atau &lt;input&gt; element. <br> <br>Sebagai contoh : <br>&lt;form action=\"/mypc/local/actionpage.html\"&gt; "
},
{
numb: 4,
title:"GET dan POST dalam atribut method",
description: "Atribut Method menentukan method HTTP (GET atau POST) yang akan digunakan saat form dikirim saat menggunakan GET, data dalam formulir akan terlihat di alamat halaman. <br> <br>Gunakan POST jika formulir ingin memperbarui data, atau menyertakan informasi sensitif (kata sandi). POST menawarkan keamanan yang lebih baik karena data yang dikirimkan tidak terlihat di alamat halaman. <br> <br>Contoh form dengan method GET : <br>&lt;form action=''/mypc/local/methodgetnjirr.html'' method=''get''&gt; <br> <br>Contoh form dengan method POST : <br>&lt;form action=''/mypc/local/methodpostnjirr.html'' method=''post''&gt;"
},
{
numb: 5,
title:"Form input",
description: "Untuk menerima input pengguna, anda memerlukan elemen formulir yang sesuai, seperti bidang teks. <br><br>Elemen &lt;input&gt; memiliki banyak variasi, tergantung pada atribut type. <br><br>Seperti: <br>&lt;input type=\"text\" name=\"surname\" value=\"siswa\"/&gt; untuk inputan text <br> <br>&lt;input type=\"password\" name=\"password\"/&gt; untuk inputan password"
},
{
numb: 6,
title:"Input type radio dan checkbox",
description:"input type checkbox pengguna dapat memilih lebih dari satu opsi dari sejumlah pilihan.<br> <br>contoh: <br>&lt;input type=\"checkbox\" id=\"gol1\" name=\"siswa\" value=\"jk\"&gt;Laki-laki<br> <br>input type radio pengguna dapat memilih hanya satu dari sejumlah pilihan.<br> <br>contoh: <br>&lt;input type=\"radio\" id=\"gol2\" name=\"siswa\" value=\"jk\"&gt;Perempuan"
},
]
