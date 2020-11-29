import React from 'react';
import * as ui from './ErrorUI';

const ErrorPage = () => {
  return (
    <ui.ErrorText>Ooops! Internal Server Error 500. Please, reload the page.</ui.ErrorText>
  );
}

export default ErrorPage;
