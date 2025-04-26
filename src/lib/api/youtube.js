// export async function fetchPlaylistVideos(playlistId) {
//   const apiKey = 'AIzaSyAjhQa7zy10F7cdGJl_hhT3R5QSCwwxdhY';
//   const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${apiKey}`;

//   console.log('Fetching URL:', url); // 추가
//   const res = await fetch(url);

//   if (!res.ok) {
//     const error = await res.text();
//     console.error('YouTube API Error:', error); // 추가
//     throw new Error('Failed to fetch YouTube videos');
//   }

//   const data = await res.json();
//   return data.items;
// }
