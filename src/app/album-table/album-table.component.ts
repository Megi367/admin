import {Component, OnInit} from '@angular/core';
import {Album, AlbumServices} from '../services/album.services';


@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.css']

})

export class AlbumTableComponent implements OnInit {
  albums: Album[] = [];
  showAlbums = true;
  showForm = true;
  message = 'My album page works!';
  message2 = 'Type your album here';
  album: Album | null = null;

  constructor(private albumService: AlbumServices) {
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
    });
  }

  // tslint:disable-next-line:typedef
  onToggleAlbumesClicked() {
    this.showAlbums = !this.showAlbums;
  }

  // tslint:disable-next-line:typedef
    onAlbumesClicked(id: number) {
    this.albumService.getSingleAlbum(id).subscribe((data: Album) => {
      this.album = data;
      this.showAlbums = false;
      this.showForm = true;
    });

  }
}
