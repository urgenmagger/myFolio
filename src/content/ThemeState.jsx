import React, {Component} from 'react';

class ThemeState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightTheme: [
        {
          id: 1,
          container: 'container_light',
          page_content: 'page_content_light',
          icons: 'icons_light',
          page_oriview: 'page_oriview_ligth',
        },
      ],
    };
  }
}
export default ThemeState;
