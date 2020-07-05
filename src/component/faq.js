import css from "bootstrap/dist/css/bootstrap.min.css";
class TanyaJawab extends HTMLElement{
 
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode :"open"});
  }

  connectedCallback(){
      this.render();
  }
  
  render(){
      this.shadowDOM.innerHTML = `
        <style>
            ${css}
            .card {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 5px;
                padding: 20px;
                margin-top: 20px;
             }
        </style>
        <div class="card">
            <h1>Penyakitnya</h1>
            <hr/>
            <h2>Apa itu virus korona?</h2>
            <p> Virus korona adalah sebutan untuk jenis virus yang dapat menyebabkan penyakit pada hewan dan manusia. Disebut korona karena bentuknya yang seperti mahkota (korona ~ crown = mahkota dalam bahasa Latin).  

                 Beberapa contoh penyakit pada manusia yang disebabkan oleh virus korona antara lain MERS (Sindrom Pernafasan Timur Tengah) dan SARS (Sindrom Pernafasan Akut Parah). 

                Virus korona terbaru yang ditemukan yang ditemukan di Wuhan, Tiongkok, pada bulan Desember 2019 diberi nama SARS Coronavirus 2 (SARS-CoV-2) dan menyebabkan penyakit Coronavirus Disease 2019 (COVID-19).
            <p>
            Sumber:  <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">https://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a>

            <hr/> 

            <h2>Apa bedanya dengan COVID-19?</h2>
            <p>
              COVID-19 adalah <strong>penyakit menular</strong> yang disebabkan oleh virus korona SARS-CoV-2. Dengan kata lain, SARS-CoV-2 adalah nama virusnya, sementara COVID-19 adalah nama penyakitnya. Ini seperti HIV yang adalah nama virus dari penyakit AIDS.
            </p> 
            Sumber:  <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">https://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a>

            <hr/>

            <h2>Bagaimana COVID-19 menular?</h2>
            <p>
              Penularan terjadi melalui <strong><em>droplet</em></strong> (butir-butir tetesan cairan) dari hidung atau mulut yang menyebar saat pembawa virus COVID-19 batuk, bersin atau meler. Tetesan cairan tersebut akan menempel pada benda atau permukaan di sekitarnya. Dan kemudian masuk ke mulut, hidung atau mata. Atau menyentuh permukaan bekas terkena butir cairannya dengan tangan lalu tangan mengusap mulut, hidung atau mata. Inilah alasan pentingnya sering-sering cuci tangan dan jangan menyentuh muka dengan tangan.
              Orang sehat dapat tertular saat tangan mereka menyentuh permukaan yang terkena tetesan tersebut dan kemudian tanpa sadar menyentuh mata, mulut, ataupun hidung (selaput lendir). Virus juga bisa masuk saat orang sehat secara tidak sengaja menghirup tetesan cairan saat si pembawa virus batuk atau bersin.
            </p>

            <h3>Apa yang harus dilakukan?</h3>
            <p>
              <ol>
                <li>Rajinlah mencuci tangan dengan sabun atau pembersih tangan berbasis alkohol minimal 60%.</li>
                <li>Jaga jarak dengan orang yang tampak sakit sepanjang kurang lebih 1 meter.</li>
                <li>Jika sakit, pastikan untuk tidak menyebarkan virus ke orang lain dengan mengurangi bepergian. Ketika keluar rumah, pakailah masker. Jika bersin, tutup mulut dan hidung dengan tisu dan buang tisunya sesegera mungkin. </li>
              </ol>
              Sumber: <a href="http://www.who.int/news-room/q-a-detail/q-a-coronaviruses">http://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a>
            </p>

            <h3>Berapa lama virus dapat menempel pada benda?</h3>
            <p>
              Masih belum pasti berapa lama virus ini dapat bertahan di permukaan, tetapi tampaknya virus ini memiliki karakteristik yang sama dengan virus korona lainnya. Studi menunjukkan bahwa virus korona (termasuk beberapa informasi awal tentang COVID-19) dapat bertahan selama beberapa jam di permukaan. Ini dapat bervariasi di dalam kondisi yang berbeda (mis. jenis permukaan, suhu atau kelembaban lingkungan). Tetapi sabun maupun cairan disinfektan sederhana dapat membunuhnya.
            </p>
            Sumber: <a href="http://www.who.int/news-room/q-a-detail/q-a-coronaviruses">http://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a>

            <h3>Apakah tetesan cairan tersebut bisa menempel pada permukaan lembut (contohnya, baju dan karpet) atau permukaan keras (misal, keyboard laptop dan gagang pintu)?</h3>
            <p>
              Sampai saat ini, tidak ada bukti bahwa COVID-19 bisa ditularkan ke manusia lainnya saat tetesan cairan menempel pada permukaan halus. Namun, COVID-19 bisa ditularkan lewat permukaan keras seperti pegangan pintu.
            </p>

            <h3>Apa yang harus dilakukan?</h3>
            <p>
              <ol>
                <li>Rajinlah mencuci tangan dengan sabun atau pembersih tangan berbasis alkohol minimal 60%</li>
                <li>Mengelap permukaan benda yang sering disentuh, seperti pegangan pintu, keyboard laptop, handphone, dan pegangan kursi, dengan disinfektan atau cairan pembersih rumah tangga.</li>
              </ol>
            </p>
            Sumber: <a href="http://www.unicef.org/indonesia/id/coronavirus; https://www.health.harvard.edu/blog/as-coronavirus-spreads-many-questions-and-some-answers-2020022719004#q5">http://www.unicef.org/indonesia/id/coronavirus; https://www.health.harvard.edu/blog/as-coronavirus-spreads-many-questions-and-some-answers-2020022719004#q5</a>

            <hr/>
            <h2>Jika seseorang terinfeksi virus ini, berapa lama sampai muncul gejala?</h2>
            <p>
              Masa inkubasi (dari masuknya virus ke dalam tubuh sampai munculnya gejala awal) adalah 1 – 14 hari, dengan rata-rata timbulnya gejala selama 5 hari.
            </p>
            Sumber: <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">https://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a>

            <hr/>

            <h2>Apa yang dimaksud dengan <em>simptomatik</em> dan <em>asimptomatik?</em></h2>
            <p>
              <strong><em>Simptomatik</em></strong> artinya bergejala. Jadi, bila seseorang terinfeksi virus ini, akan timbul gejala yang umumnya diawali dengan demam dan rasa tidak enak badan, diikuti batuk kering (dalam waktu seminggu) yang jika memberat bisa diikuti sesak napas. 

              Beberapa orang yang terinfeksi tidak menunjukkan gejala sama sekali. Ini yang disebut sebagai asimptomatik. Sampai saat ini bukti ilmiah menunjukkan bahwa risiko penularan dari pasien COVID-19 yang <strong><em>asimptomatik</em></strong> sangat kecil.  
            </p>

            <hr/>
            <h2>Apakah memakai masker akan membantu saya terhindar dari virus tersebut?”</h2>
            <p>Pencegahan terbaik adalah di rumah saja, jaga jarak dan cuci tangan. Dan kalau terpaksa keluar rumah untuk membeli makanan, ke apotik dll sebaiknya memakai masker kain.</p>

            <h3>Apa yang harus dilakukan?</h3>
            <p>
              <ol>
                <li>Rajinlah mencuci tangan dengan sabun atau pembersih tangan berbasis alkohol minimal 60%</li>
                <li>Menjaga kebersihan barang yang sering kita sentuh.</li>
                <li>Perkuat daya tahan tubuh.</li>
                <li>Gunakan masker kain jika harus beraktifitas ke luar rumah. Masker kain untuk kita masyarakat umum, masker bedah (medis) untuk pekerja medis.</li>
              </ol>
            </p>
            Sumber: <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses ">https://www.who.int/news-room/q-a-detail/q-a-coronaviruses </a>

            <hr/>
            <h2>“Saya punya lima ekor kucing di rumah dan pastinya suka main dan cium-cium mereka. Apakah mungkin saya tertular COVID-19 dari kucing saya? Bagaimana dengan anjing?”</h2>
            <p>Tidak, sampai saat ini tidak ada bukti yang mendukung bahwa hewan peliharaan seperti kucing dan anjing membawa atau bisa menyebarkan virus yang mengakibatkan penyakit COVID-19.</p>

            <h3>Apa yang harus dilakukan?</h3>
            <p>Walau tidak ada bukti bahwa COVID-19 bisa menular melalui hewan peliharaan,<strong> rajinlah mencuci tangan dengan sabun atau cairan pembersih tangan berbasis alkohol minimal 60%</strong>. Ini harus tetap dilakukan setelah bersentuhan dengan hewan peliharaan. Ini akan menjagamu dari berbagai virus dan bakteri lain, seperti E.Coli dan Salmonella, yang bisa ditularkan ke manusia melalui binatang peliharaan.</p>
            Sumber: <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses; https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters">https://www.who.int/news-room/q-a-detail/q-a-coronaviruses; https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters</a>

        </div>
        <div class="card">
            <h1>Risiko dari penyakit ini</h1>
            <hr/>
            <h2>Seberapa banyak pasien yang akan mengalami gejala serius?</h2>
            <p>
              <ul style="list-style-type:square;">
                <li>Gejala ringan seperti flu biasa: 81% (tingkat kematian: 0)</li>
                <li>Gejala lebih serius seperti sesak napas dan pneumonia (radang paru-paru): 14% (tingkat kematian: 0)</li>
                <li>
                  Perlu masuk ICU dengan kondisi kritis karena gagal pernapasan, syok septik, dan gagal multi-organ: 5% (tingkat kematian: 50%)</li>
              </ul>
            </p>
            Sumber: <a href="https://jamanetwork.com/journals/jama/fullarticle/2762130">https://jamanetwork.com/journals/jama/fullarticle/2762130</a>

            <h3>Apa yang harus dilakukan?</h3>
            <p>
              <ol>
                <li>Rajinlah mencuci tangan dengan sabun atau pembersih tangan berbasis alkohol minimal 60%</li>
                <li>Tetap tenang. Fokuslah pada jumlah penderita yang sembuh dan ikuti perkembangan hanya dari sumber terpercaya, seperti Kementerian Kesehatan. Tentunya tetap biasakan kebersihan diri, tingkatkan daya tahan tubuh, dan hindari berinteraksi langsung dengan orang sakit.</li>
              </ol>
            </p>

            <hr/>

            <h2>Bagaimanakah tingkat kematian akibat penyakit ini jika dilihat dari kelompok usia?</h2>
            <p> Berdasarkan data yang sama, tingkat kematian akibat penyakit ini sesuai golongan umur adalah sebagai berikut:
              <ul style="list-style-type:square;">
                <li>0-9 tahun : 0%</li>
                <li>10-19 : 0,2%</li>
                <li>20-29 : 0,2%</li>
                <li>30-39 : 0,2%</li>
                <li>40-49 : 0,4%</li>
                <li>50-59 : 1,3%</li>
                <li>60-69 : 3,6%</li>
                <li>70-79 : 8.0%</li>
                <li>>80 : 14,8%</li>
              </ul>
            </p>
            Sumber: <a href="http://jamanetwork.com/journals/jama/fullarticle/2762130">http://jamanetwork.com/journals/jama/fullarticle/2762130</a>

            <hr/>

            <h2>Bagaimanakah tingkat kematian akibat penyakit ini jika dilihat dari jenis kelamin?</h2>
            <p>Berdasarkan data yang sama, tingkat kematian penderita laki-laki lebih tinggi dari penderita perempuan, yaitu laki-laki sebanyak 2,8%, sementara perempuan 1,7%.</p>
            Sumber: <a href="http://jamanetwork.com/journals/jama/fullarticle/2762130">http://jamanetwork.com/journals/jama/fullarticle/2762130</a>

            <hr/>
            <h2>Bagaimanakah tingkat kematian akibat penyakit ini jika dilihat dari ada/tidak adanya penyakit penyerta/komorbiditas lainnya?</h2>
            <p>Berdasarkan data yang sama, tingkat kematian akibat penyakit ini jika pasien tersebut memiliki penyakit penyerta lainnya adalah:
              <ul style="list-style-type:square;">
                <li>Kondisi tanpa penyakit penyerta apapun: 0,9%</li>
                <li>Pasien dengan penyakit kardiovaskular: 10,5%</li>  
                <li>Diabetes: 7,3%</li>
                <li>Saluran pernapasan kronis: 6,3%</li>
                <li>Tekanan darah tinggi: 6%</li>
                <li>Kanker: 5,6%</li>
              </ul>
            </p>
            Sumber: <a href="http://jamanetwork.com/journals/jama/fullarticle/2762130">http://jamanetwork.com/journals/jama/fullarticle/2762130</a> 

            <hr/>

            <h2>Apakah ibu hamil dapat meneruskan virus korona ke anaknya yang masih berada di dalam kandungan?</h2>
            <p>Sampai saat ini, belum ada bukti yang cukup untuk menyatakan bahwa virus ini dapat ditularkan ibu ke bayinya selama di dalam kandungan ataupun apa dampak yang bisa dialami oleh bayi. Hal ini sedang dalam penelitian lebih lanjut. Ibu hamil harus menerapkan tindakan pencegahan yang tepat dan mendapatkan perawatan medis segera jika mengalami gejala yang mirip dengan gejala infeksi virus korona baru ini, seperti demam, batuk, dan sesak napas.</p>
            Sumber: <a href="https://www.unicef.org/indonesia/id/coronavirus">https://www.unicef.org/indonesia/id/coronavirus</a>

            <hr/>

            <h2>Bagaimana dengan ibu menyusui yang terinfeksi virus COVID-19? Apakah ia bisa menularkan ke bayinya?</h2>
            <p>Semua ibu yang berada di daerah yang terjangkit atau memiliki risiko tinggi infeksi harus segera mencari perawatan medis jika timbul gejala demam, batuk, atau sesak napas. Mengingat menyusui memiliki banyak manfaat dan tidak ada pengaruh signifikan dari transmisi virus penyakit pernapasan melalui ASI, ibu dapat terus menyusui, tapi ingat untuk menggunakan masker supaya tetesan cairan dari mulut dan hidung tidak terciprat ke bayi. Pastikan ibu rajin mencuci tangan sebelum menggendong bayi maupun menyusui. </p>
            Sumber: <a href="https://www.unicef.org/indonesia/id/coronavirus">https://www.unicef.org/indonesia/id/coronavirus</a>

            <h3>Ibu hamil dan ibu menyusui harus bagaimana?</h3>
            <ol>
              <li>Rajinlah mencuci tangan dengan sabun atau pembersih tangan berbasis alkohol minimal 60%, terutama sebelum menggendong bayi dan menyusui. </li>
              <li>Jika Anda kurang enak badan, gunakan masker setiap saat ketika bersama dengan bayi.</li>  
              <li>Jaga jarak setidaknya 1 meter dari orang yang sedang batuk atau bersin. </li>
            </ol>

            <hr/>
            <br/>
            <h1>Penanganan dan Pengobatannya</h1>
            <hr/>

            <h2>Apakah COVID-19 sudah ada obatnya? Bila sudah ada, apakah dijual bebas di apotik atau toko obat?</h2>
            <p>Sampai saat ini, obat spesifik untuk COVID-19 belum ditemukan. Akan tetapi, penelitian terus dilakukan oleh berbagai pihak. Penanganan saat ini fokus pada gejala yang timbul dari penderita. Sementara itu, penderita dengan gejala yang lebih serius harus dirawat di rumah sakit. Sebagian besar penderita sembuh karena perawatan intensif.</p>
            Sumber: <a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"> https://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a>
            <a href="https://www.who.int/news-room/detail/12-02-2020-world-experts-and-funders-set-priorities-for-covid-19-research">https://www.who.int/news-room/detail/12-02-2020-world-experts-and-funders-set-priorities-for-covid-19-research </a> 

            <hr/>
            <h2>Bukankah vaksin COVID-19 sedang diproduksi? Kapan bisa digunakan?</h2>
            <p>Hingga saat ini belum ada vaksin untuk pencegahan COVID-19. Seperti halnya obat, vaksin untuk COVID-19 sedang dalam proses penelitian yang dilakukan oleh berbagai pihak. </p>
            Sumber: <a href=" https://www.who.int/news-room/q-a-detail/q-a-coronaviruses"> https://www.who.int/news-room/q-a-detail/q-a-coronaviruses </a>

            <hr/>
            <h2>Apa yang harus saya sampaikan kepada tenaga medis jika saya batuk pilek demam dan sulit bernafas?</h2>
            <p>
              <ol>
                <li>Riwayat perjalanan (jika ada, ke Tiongkok atau negara-negara yang sudah terjangkit COVID-19, seperti Singapura, Jepang, Korea Selatan, dan Italia)</li>
                <li>Kapan gejala mulai timbul</li> 
                <li>Adakah kontak selama 14 hari terakhir dengan seseorang yang memiliki gejala pernapasan dan baru datang dari salah satu daerah yang ditemukan memiliki kasus COVID-19</li> 
              </ol>
              Dokter Anda yang akan menentukan langkah selanjutnya. 
            </p>
            Sumber: <a href="https://www.unicef.org/indonesia/id/coronavirus">https://www.unicef.org/indonesia/id/coronavirus </a>  

            <hr/>
            <h2>Bagaimana saya dapat dinyatakan positif atau negatif COVID-19?</h2>
            <ol>
              <li>Sampel spesimen akan diambil menggunakan alat berbentuk batang cotton bud namun lebih panjang, melalui hidung.</li>
              <li>Sampel tersebut akan dikirim ke laboratorium untuk dites PCR (Reaksi Berantai Polimerase). Pemerintah sudah menunjuk laboratorium di 10 kota yaitu Batam, Medan, Palembang, Makassar, Manado, Ambon, Jakarta, Bandung, Yogyakarta, Surabaya, dan Banjarmasin untuk melakukan tes ini.</li>
            </ol>
            Sumber: 
            <a href="https://infeksiemerging.kemkes.go.id/download/REV-02_Pedoman_Kesiapsiagaan_COVID-19__Versi_17_Feb_2020_fix.pdf">https://infeksiemerging.kemkes.go.id/download/REV-02_Pedoman_Kesiapsiagaan_COVID-19__Versi_17_Feb_2020_fix.pdf </a>
            <a href="https://www.thejakartapost.com/amp/news/2020/03/04/indonesia-test-more-people-covid-19-coronavirus.html">https://www.thejakartapost.com/amp/news/2020/03/04/indonesia-test-more-people-covid-19-coronavirus.html</a>

            <hr/>
            <h2>Kalau saya dinyatakan positif COVID-19, apakah pemerintah  akan menanggung seluruh biaya pengobatannya?</h2>
            <p>Ya. Berdasarkan Keputusan Menteri Kesehatan Nomor HK.01.07/ MENKES/104/2020 tanggal 4 Februari 2020 dan KMK No. HK.01.07-MENKES-238-2020 tentang JUKNIS Penggantian Biaya Pasien Infeksi Emerging Tertentu, seluruh biaya tes dan perawatan pasien yang terkonfirmasi positif COVID-19 akan ditanggung oleh pemerintah.</p>
            Sumber:
            <a href="https://republika.co.id/berita/q6lp1s335/pemerintah-tanggung-biaya-pelayanan-pasien-corona">Pemerintah Tanggung Biaya Pelayanan Pasien Corona</a>
            <a href="http://sehatnegeriku.kemkes.go.id/baca/rilis-media/20200409/0733623/rs-klaim-biaya-perawatan-pasien-covid-19-begini-teknisnya/">RS Bisa Klaim Biaya Perawatan Pasien Covid-19, Begini Teknisnya</a>

            <hr/>
            <h1>Referensi:</h1>
            <ul style="list-style-type: square;">
              <li><a href="https://www.unicef.org/indonesia/id/coronavirus">https://www.unicef.org/indonesia/id/coronavirus</a></li>
              <li><a href="https://www.health.harvard.edu/blog/as-coronavirus-spreads-many-questions-and-some-answers-2020022719004">https://www.health.harvard.edu/blog/as-coronavirus-spreads-many-questions-and-some-answers-2020022719004</a></li>
              <li><a href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">https://www.who.int/news-room/q-a-detail/q-a-coronaviruses</a></li> 
            </ul>
        </div>`;
    }

}
customElements.define("tanya-jawab", TanyaJawab);