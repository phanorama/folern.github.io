let des = [

  {
    numb: 1,
    title: "Sintak CSS",
    description: "CSS terdiri dari aturan style yang ditafsirkan oleh browser dan kemudian diterapkan ke elemen HTML pada dokumen kita. <br> <br>Peraturan style memiliki 3 bagian: selector, property, dan value <br> <br>Contoh: <br>h1 { color: orange; } <br> <br>yang dimana: <br>h1 = selector <br>color = property <br>orange = value"
  },

  {
    numb: 2,
    title: "Type selector",
    description: "Selector yang paling umum dan mudah dimengerti adalah Type Selector. selector ini menargetkan jenis elemen yang ada pada halaman HTML. <br> <br>Contoh, untuk memilih elemen &lt;p&gt; pada halaman HTML: <br>p {color: red; <br>font-size: 130%;}"
  },

  {
    numb: 3,
    title: "Id selector",
    description: "Id selector memungkinkan kita untuk membuat style pada element HTML yang memiliki atribut id, terlepas dari posisinya pada dokumen. Berikut contoh id selector: <br> <br>HTML: <br>&lt;div id=\"intro\"&gt; <br>&lt;p&gt; Ini adalah paragraf pada bagian intro.&lt;/p&gt; <br>&lt;/div&gt; <br>&lt;p&gt; Paragraf ini bukan bagian intro.&lt;/p&gt; <br> <br>CSS: <br>#intro {color: white; <br>background-color: grey;}"
  },

  {
    numb: 4,
    title: "Class selector",
    description: "Class selector memiliki cara kerja yang sama seperti id selector. Namun perbedan nya adalah, id selector hanya bisa digunakan sekali dalam sebuah halaman sedangkan class selector dapat digunakan berulang-ulang sebanyak yang di butuhkan. <br>Contoh seperti di bawah ini: <br> <br>HTML: <br>&lt;div&gt; <br>&lt;p class=\"first\"&gt;Ini sebuah paragraf.&lt;/p&gt; <br>&lt;p&gt; Ini sebuah paragraf. &lt;/p&gt; <br>&lt;/div&gt; <br>&lt;p class=\"first\"&gt;Ini sebuah paragraf.&lt;/p&gt; <br>&lt;p&gt; Ini sebuah paragraf. &lt;/p&gt; <br> <br>CSS: <br>.first {font-size: 200%;}"
  },
  {
    numb: 5,
    title: "Descendant selector",
    description: "Selector ini digunakan untuk memilih elemen yang merupakan turunan dari elemen lain. Saat memilih level, kita dapat memilih level sebanyak yang dibutuhkan. <br>Contoh, agar hanya memilih elemen &lt;em&gt; pada paragraf pertama di bagian intro: <br> <br>HTML: <br>&lt;div id=\"intro\"&gt; <br>&lt;p class=\"first\"&gt;Ini adalah &lt;em&gt; paragraf.&lt;/em&gt;&lt;/p&gt; <br>&lt;p&gt; Ini adalah paragraf.&lt;/p&gt; <br>&lt;/div&gt; <br>&lt;p class=\"first\"&gt; Ini adalah paragraf.&lt;/p&gt; <br>&lt;p&gt; Ini adalah Paragraf. &lt;/p&gt; <br> <br>CSS: <br>#intro .first em {color: pink; <br>background-color: grey;}"
  },

]
