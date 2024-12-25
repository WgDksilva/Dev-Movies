import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Arrow } from './styles';

import Seta from '../../assets/seta.png';

const BackButton = () => {
  const navigate = useNavigate();
  const BackTop = () => window.scrollTo({ top: 0, behavior: 'auto' });

  const BackPage = () => {
    navigate(-1);
    BackTop();
  };

  return (
    <Arrow >
       <img src={Seta} alt="seta" onClick={BackPage} title='Voltar'/>
    </Arrow>
  );
};

export default BackButton;