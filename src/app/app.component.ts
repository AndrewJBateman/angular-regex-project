import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private content: string;
    public query: string;

    public constructor() {
        this.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a quam ornare, bibendum ligula a, rhoncus ligula. Etiam aliquet, justo sollicitudin imperdiet luctus, nulla justo sodales mi, sit amet semper nisl velit vel massa. In hac habitasse platea dictumst.";
    }

    public highlight() {
        if(!this.query) {
            return this.content;
        }
        /*The regular expression looks for all case insensitive occurrences of this.query.
        Take the matches and wrap them in HTML tags with the CSS class name that we created.*/
        return this.content.replace(new RegExp(this.query, "gi"), match => {
            return '<span class="highlightText">' + match + '</span>';
        });
    }

}