import React from 'react';
import { ClipLoader } from 'react-spinners';
import '../styles/loading.css'

const Loading = ({loading}) =>
  <div id="loader">
    <ClipLoader loading={loading}/>
  </div>

export default Loading;