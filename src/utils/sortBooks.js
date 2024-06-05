export const sortBooks = (books) => {
    return books.sort((a, b) => {
      // Normalize author names to ensure case-insensitive comparison
      const authorA = a.sorted_authors ? a.sorted_authors.toUpperCase() : '';
      const authorB = b.sorted_authors ? b.sorted_authors.toUpperCase() : '';
      if (authorA !== authorB) {
        return authorA.localeCompare(authorB);
      }
      
      // Normalize series names to ensure case-insensitive comparison
      const seriesA = a.series ? a.series.toUpperCase() : 'ZZZZ'; // Using 'ZZZZ' to ensure books without series go last
      const seriesB = b.series ? b.series.toUpperCase() : 'ZZZZ';
      if (seriesA !== seriesB) {
        return seriesA.localeCompare(seriesB);
      }
      
      // Compare volume numbers
      const volumeA = a.volume !== null ? a.volume : Infinity;
      const volumeB = b.volume !== null ? b.volume : Infinity;
  
      return volumeA - volumeB;
    });
  };
  