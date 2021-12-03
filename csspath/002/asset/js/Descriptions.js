let des= [

  {
    numb: 1,
    title: "Inline",
    description: "Menggunakan Inline adalah salah satu cara untuk menyisipkan Style Sheets. Dengan menggunakan Inline Style, kita dapat memasukan suatu style ke sebuah elemen HTML. <br> <br>Untuk menggunakan Inline Style, tambahkan atribut style CSS ke tag yang ingin diberi style CSS. <br> <br>Contoh di bawah ini menunjukan cara membuat paragraf dengan latar belakang abu-abu dan teks putih: <br> <br>&lt;p style=\"color:white; background-color:gray;\"&gt; <br>Ini contoh penggunaan inline. <br>&lt;/p&gt; "
  },

  {
    numb: 2,
    title : "Internal",
    description: "Internal Style didefinisikan di dalam tag &lt;style&gt;, di bagian head pada HTML. <br>Contoh: <br>&lt;head&gt; <br>&lt;style&gt; <br>p { <br>color:white; <br>background-color:gray; <br>} <br>&lt;/style&gt; <br>&lt;/head&gt; <br>&lt;body&gt; <br>&lt;p&gt;Ini paragraf pertama.&lt;/p&gt;<br>&lt;/body&gt;"
  },

  {
    numb: 3,
    title: "External",
    description: "Dengan metode External ini, semua peraturan style di masukan ke sebuah file, yang dimana file itu disimpan dengan extension .css <br> <br>File CSS itu dideklarasi pada HTML dengan menggunakan tag &lt;link&gt;. Tag &lt;link&gt; diletakan pada bagian head. Contoh seperti di bawah: <br>HTML: <br>&lt;head&gt; &lt;link rel=\"stylesheet\" href=\"style.css\"&gt;&lt;/head&gt; <br>&lt;body&gt; &lt;p&gt;Ini paragraf pertama.&lt;/p&gt;&lt;/body&gt; <br> <br>CSS: <br>p { color:white; <br>background-color:grey;}"
  },

]
