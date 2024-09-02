// Import komponen utama dari direktori yang sesuai
import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';
import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

// Import data atau konstanta yang digunakan pada halaman ini
import resumeMovies from '../../component/constants/resumeMovies';
import seriesPersembahanChill from '../../component/constants/seriesPersembahanChill';
import topRatingFilmSeriesHariIni from '../../component/constants/topRatingFilmSeriesHariIni';
import seriesTrending from '../../component/constants/seriesTrending';
import rilisBaruMovies from '../../component/constants/rilisBaruMovies';
import genres from '../../component/constants/genres';

/**
 * Komponen ini mengimpor dan menggunakan berbagai komponen UI serta data untuk 
 * membangun halaman utama yang berisi berbagai bagian seperti Hero, film resume,
 * series persembahan, film top rating, dan lainnya.
 * 
 * Semua data dan komponen diimpor dari jalur direktori yang sesuai untuk menjaga
 * keteraturan dan kemudahan pemeliharaan kode.
 */

export default function HomePage() {
  return (
    <div>
      {/* Menampilkan header pada bagian atas halaman */}
      <Header />

      {/* Bagian Hero Layout untuk menampilkan gambar hero, judul, deskripsi, dan dropdown genre */}
      <HeroLayouts
        bgimage={{ imgsrc: '/path/to/hero-image.jpg', alt: 'Hero Image' }}
        title="Judul Hero"
        description="Deskripsi singkat mengenai konten hero."
        genres={genres}
      />

      {/* Bagian untuk menampilkan film resume */}
      <CardsLayouts title="Lanjutkan Tonton" height="h-auto" amount={5}>
        {resumeMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard {...movie} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan series persembahan Chill */}
      <CardsLayouts title="Series Persembahan Chill" height="h-auto" amount={5}>
        {seriesPersembahanChill.map((series, index) => (
          <SwiperSlide key={index}>
            <MovieCard {...series} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan film top rating hari ini */}
      <CardsLayouts title="Top Rating Film & Series Hari Ini" height="h-auto" amount={5}>
        {topRatingFilmSeriesHariIni.map((film, index) => (
          <SwiperSlide key={index}>
            <MovieCard {...film} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan series yang sedang trending */}
      <CardsLayouts title="Series Trending" height="h-auto" amount={5}>
        {seriesTrending.map((trending, index) => (
          <SwiperSlide key={index}>
            <MovieCard {...trending} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan film rilis baru */}
      <CardsLayouts title="Rilis Baru" height="h-auto" amount={5}>
        {rilisBaruMovies.map((newRelease, index) => (
          <SwiperSlide key={index}>
            <MovieCard {...newRelease} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Menampilkan footer pada bagian bawah halaman */}
      <Footer />
    </div>
  );
}




