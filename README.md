# :zap: Angular Regex Project

* This app highlights search text within a string. It renders HTML on the screen via a variable and manipulates that HTML based on a query, a regular expression and REGEX replace logic.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-regex-project?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-regex-project?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-regex-project?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-regex-project?style=plastic)
## :page_facing_up: Table of contents

* [:zap: Angular Regex Project](#zap-angular-regex-project)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* A regular expression is "A sequence of characters that forms a search pattern, mainly for use in pattern-matching with strings, or string matching, i.e. “find and replace”-like operations."

## :camera: Screenshots

![Example screenshot](./img/highlight-text.png).

## :signal_strength: Technologies

* [Angular v13](https://angular.io/)
* [Javascript Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## :floppy_disk: Setup

* Run `ng test` to run some simple Jasmin testson Karma.
* Run `ng lint` to check syntax using TSLint. Note [TSLint will be replaced with ESLint](https://github.com/palantir/tslint/issues/4534)
* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## :computer: Code Examples

* extract from `app.component.ts file`

```typescript

export class AppComponent {

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
```

## :cool: Features

* text that matches what is being searched for is highlighted. The query is case-insensitive.

## :clipboard: Status & To-Do List

* Status: Working. Passes basic Jasmine tests
* To-Do: This could be used as a sand-box to try out other angular functionality. Regex could be expanded to search for numbers and highlight them in a different colour etc.

## :clap: Inspiration

* ["Highlight Text Within a String Using Angular and Regular Expressions", by Nic Raboy of X-Team.com](https://developer.telerik.com/topics/web-development/highlight-text-within-string-using-angular-regular-expressions/).

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
