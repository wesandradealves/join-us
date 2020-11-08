import React, { useEffect, useState } from 'react';

import {
  useParams
} from "react-router-dom";

import { } from './styles';

import {
  Wrapper
} from '../../layouts/styles';

const SearchPage: React.FC = () => {
  let { s } = useParams();

  return (
	<Wrapper> 
		<>${s}</>
	</Wrapper>
  );
};

export default SearchPage;
