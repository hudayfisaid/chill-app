import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';
import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

// Mengimpor data series dan genre dari file constants
import resumeSeries from '../../component/constants/resumeSeries';
import seriesPersembahanChill from '../../component/constants/seriesPersembahanChill';
import topRatingFilmSeriesHariIni from '../../component/constants/topRatingFilmSeriesHariIni';
import seriesTrending from '../../component/constants/seriesTrending';
import rilisBaruMovies from '../../component/constants/rilisBaruMovies';
import genres from '../../component/constants/genres';

/**
 * Komponen Series
 * 
 * Komponen ini merupakan halaman utama untuk menampilkan berbagai serial 
 * yang sedang dilanjutkan, series persembahan Chill, top rating series hari ini,
 * series trending, dan rilis baru. 
 */
const Series = () => {
  return (
    <>
      {/* Header bagian atas halaman */}
      <Header />

      {/* Hero section dengan gambar latar, dropdown genre, judul, dan deskripsi */}
      <HeroLayouts 
        bgimage={{ imgsrc: "/img/bg/happiness.png", alt: "Happiness" }} 
        genres={genres} 
        title="Happiness" 
        description="Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen."
      />

      {/* Bagian untuk menampilkan serial yang sedang dilanjutkan */}
      <CardsLayouts title="Melanjutkan Tonton Series" height="h-[309px]" amount={4}>
        {resumeSeries.map((series, index) => (
          <SwiperSlide key={index} className="hover:z-50">
            <MovieCard key={index} index={index} {...series} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan series persembahan Chill */}
      <CardsLayouts title="Series Persembahan Chill" height="h-[512px]" amount={5}>
        {seriesPersembahanChill.map((series, index) => (
          <SwiperSlide key={index} className="hover:z-50">
            <MovieCard key={index} index={index} {...series} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan top rating series hari ini */}
      <CardsLayouts title="Top Rating Series Hari Ini" height="h-[512px]" amount={5}>
        {topRatingFilmSeriesHariIni.map((series, index) => (
          <SwiperSlide key={index} className="hover:z-50">
            <MovieCard key={index} index={index} {...series} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan series trending */}
      <CardsLayouts title="Series Trending" height="h-[512px]" amount={5}>
        {seriesTrending.map((series, index) => (
          <SwiperSlide key={index} className="hover:z-50">
            <MovieCard key={index} index={index} {...series} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Bagian untuk menampilkan film rilis baru */}
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount={5}>
        {rilisBaruMovies.map((movie, index) => (
          <SwiperSlide key={index} className="hover:z-50">
            <MovieCard key={index} index={index} {...movie} />
          </SwiperSlide>
        ))}
      </CardsLayouts>

      {/* Footer bagian bawah halaman */}
      <Footer />
    </>
  );
};

export default Series;
