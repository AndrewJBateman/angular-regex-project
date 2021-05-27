import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-regex-project';

  private content: string;
  public query: string;

  public constructor() {
  // tslint:disable-next-line: max-line-length
    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a quam ornare bibendum; ligula; a, rhoncus; ligula. Etiam; aliquet, justo; sollicitudin; imperdiet; luctus, nulla justo; sodales; mi, sit; amet; semper; nisl; velit; vel; massa. In; hac; habitasse; platea; dictumst';
  }

  // if no text in query then just return
  public highlight(): string {
    if (!this.query) {
      return this.content;
    }
    /*The regular expression looks for all case insensitive occurrences of this.query.
    Take the matches and wrap them in HTML tags with the CSS class name that we created.*/
    return this.content.replace(new RegExp(this.query, 'gi'), match => {
      return '<span class="highlightText">' + match + '</span>';
    });
  }
}
