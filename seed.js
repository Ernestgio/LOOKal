const mongoose = require('mongoose');

const TourService = require('./models/TourService');


const dummyTourServices =
[
    {
        name: 'Loka Wisata Batu Raden',
        imageURL: 'https://cdn.idntimes.com/content-images/post/20201030/76874054-119244686200092-5954590839393213021-n-b0573c0b7d5efc851acd51741555a7c0.jpg',
        description: 'Pernah membayangkan bagaimana jadinya jika wisata alam dipadukan dengan wisata modern masa kini? Objek wisata seperti itu bisa kamu temui di Lokawisata Baturaden yang berada di Karangmangu, Baturaden, Kabupaten Banyumas atau berjarak sekitar 15 kilometer dari pusat Kota Purwokerto. Lokawisata Baturaden Banyumas merupakan destinasi wisata yang cocok dikunjungi bersama keluarga, karena di dalamnya terdapat berbagai fasilitas hiburan yang dapat dinikmati anak-anak hingga dewasa. Lokasinya yang berada di kaki Gunung Slamet membuat hawa di Lokawisata Baturaden terasa sejuk.',
        location: 'Batu Raden',
        ticketPrice: 30000,
        unit: 'tiket',
        type: 'tiket'
    },
    {
        name: 'Taman Liana Kebun Raya Batu Raden',
        imageURL: 'https://3.bp.blogspot.com/-MpxYlZlkDR4/VW-9Qi5fawI/AAAAAAAAIX8/1yuY1qIfxO8/s1600/kebun%2Braya%2Bbatu%2Braden.jpg',
        description: 'Kebun Raya Baturraden berada di Desa Kemutug Lor, Kecamatan Baturraden, Kabupaten Banyumas, berbatasan dengan Lokawisata Baturraden dan Bumi Perkemahan Baturraden. Pembangunannya dirintis sejak tahun 2001. Kebun Raya ini merupakan wujud buah inspirasi Ibu Megawati Soekarnoputri (Wakil Presiden Republik Indonesia) yang dicetuskan pada penutupan Jambore Nasional tahun 2000 di Baturraden, Jawa Tengah. Hal ini disampaikan langsung oleh Ibu  Mega kepada Gubernur Jawa Tengah, H. Mardiyanto, mengingat pada saat itu Provinsi Jawa Tengah merupakan satu-satunya provinsi di Pulau Jawa yang belum memiliki kebun raya. Luas keseluruhan Kebun Raya Baturraden mencapai 143,5 ha dan terletak di kawasan Wana Wisata Perum Perhutani yang merupakan perkebunan pinus (Pinus merkusii), damar (Agathis borneensis), dan rasamala (Altingia excelsa), serta beberapa jenis rotan sebagai sisipan. Kebun Raya Baturraden telah ditetapkan sebagai kawasan konservasi ex situuntuk flora pegunungan Jawa.',
        location: 'Batu Raden',
        ticketPrice: 20000,
        unit: 'tiket',
        type: 'tiket'
    },
    {
        name: 'Curug Telu',
        imageURL: 'https://media.travelingyuk.com/wp-content/uploads/2017/01/Curug-telu-2-1.jpg',
        description: 'Curug Telu memiliki pemandangan yang indah dan hawa khas pegunungan yang masih sejuk, air curugnya pun jernih. Pengunjung yang datang ke wisata Baturaden biasanya menghabiskan waktu di curug ini dengan berenang, main air, berfoto mengabadikan momen, dan memancing. Jalur menuju curug yang terbilang mudah membuat curug ini semakin banyak didatangi pengunjung terutama saat libur tiba.',
        location: 'Pangandaran',
        ticketPrice: 20000,
        unit: 'tiket',
        type: 'tiket'
    },
    {
        name: 'Telaga Sunyi',
        imageURL: 'https://media.travelingyuk.com/wp-content/uploads/2017/01/Telaga-Sunyi.jpg',
        description: 'Sesuai dengan namanya, Telaga Sunyi berada di suatu kawasan yang sunyi tepatnya berjarak sekitar 2.8 kilometer dari Lokawisata Baturaden. Objek wisata alam Baturaden Jateng ini sangat cocok bagi mereka yang ingin bersantai sejenak melarikan diri dari keramaian. Telaga ini memiliki panorama alam yang indah, udara peghunungan yang sejuk, ditambah pohon-pohon besar yang rindang membuat pengunjung betah berlama-lama di sini. Telaga sunyi memiliki kedalaman hingga 3 meter.',
        location: 'Batu Raden',
        ticketPrice: 10000,
        unit: 'tiket',
        type: 'tiket'
    },
    {
        name: 'Pangandaran Waterpark',
        imageURL: 'https://www.javatravel.net/wp-content/uploads/2019/08/Pangandaran-Waterpark.jpg',
        description: 'Pangandaran Waterpark ini merupakan tempat wisata yang paling enak untuk dikunjungi. Terutama bersama dengan keluarga dan orang tersayang. Meski masih terbilang baru tetapi tempat ini memang menarik untuk dikunjungi. Fasilitas yang disajikan seperti luncuran, waterboom dan lain sebagainya Wisatawan bisa menikmati petualangan seru seperti highrope dan yang lainnya. Ada juga ATV yang bisa digunakan. Tempat wisata Pangandaran Waterpark berada di pinggiran Pantai Lembah Putri. Wisatawan harus menemupuh jarak sekitar 5 km dari pintu wisata Pangandaran yang ada di kecamatan Kalipucang.',
        location: 'Pangandaran',
        ticketPrice: 50000,
        unit: 'tiket',
        type: 'tiket'
    },
    {
        name: 'Curug Tujuh Cibolang',
        imageURL: 'https://www.javatravel.net/wp-content/uploads/2019/08/Curug-Tujuh-Cibolang.jpg',
        description: 'https://www.javatravel.net/wp-content/uploads/2019/08/Curug-Tujuh-Cibolang.jpg',
        location: 'Pangandaran',
        ticketPrice: 30000,
        unit: 'tiket',
        type: 'tiket'
    }
];

const seedDB = async () => {
    try {
        TourService.remove();
        for (dummyTourService of dummyTourServices){
            await TourService.create(dummyTourService);
            console.log('sedding data...');
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = seedDB;