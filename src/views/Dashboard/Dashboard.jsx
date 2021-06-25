import { useEffect, useState } from 'react';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import apiFeed from '../../service/api/apiFeed';
import axios from 'axios';
import loveOn from '../../assets/Reaction/loveOn.png';
import loveOff from '../../assets/Reaction/loveOff.png';
import likeOn from '../../assets/Reaction/likeOn.png';
import likeOff from '../../assets/Reaction/likeOff.png';
import PersonIcon from '@material-ui/icons/Person';
import calendar from '../../assets/calendar.png';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';

import {
  MainContainer,
  AreaContainer,
  Label,
  TextAreaContainer,
  TextArea,
  ButtonField,
  CardContainer,
  GridContainer,
  MainGridContainer,
  GridTextContainer,
  GridText,
  GridTextArea,
  DateContainer,
  DatePublished,
  UserPublished,
  Content,
  ReactionContainer,
  LovedPress,
  CountLove,
  LikedPress,
  CountLike,
} from './styles';

const Dashboard = () => {
  const [textValue, setTextValue] = useState('');
  const [textPost, setTextPost] = useState([]);

  const Feed = () => {
    const URL = 'https://segware-book-api.segware.io/api';

    const token = localStorage.getItem('token');
    axios
      .get(`${URL}/feeds`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setTextPost(data);
        return data;
      })
      .catch((err) => {
        return err;
      });
  };

  const React = (reaction) => {
    const axios = require('axios');

    const URL = 'https://segware-book-api.segware.io/api';

    const token = localStorage.getItem('token');
    axios
      .post(
        `${URL}/reaction`,

        reaction,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          Feed();
          //
        }
      });
  };

  useEffect(() => {
    window.history.forward(0);
    Feed();
  }, []);

  const handleClick = () => {
    if (!textValue) return;

    const content = textValue;

    apiFeed({ content: content });

    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const handleReaction = (idFeed, like, love) => {
    const feedReaction = {
      feedId: idFeed,
      like: like,
      love: love,
    };
    React(feedReaction);
  };
  return (
    <div>
      <HeaderDashboard />
      <MainContainer cols={3}>
        <div>
          <Label style={{ fontFamily: 'Poppins', fontSize: '30px' }}>Escreva seu texto</Label>
        </div>
        <AreaContainer container>
          <TextAreaContainer item xs={12} sm={9} md={6} lg={3} xl={3}>
            <TextArea
              data-testid="text-area-field"
              maxLength={280}
              aria-label="minimum height"
              placeholder="Digite seu texto aqui..."
              value={textValue}
              onChange={(event) => setTextValue(event.target.value)}
            />
            <ButtonField data-testid="button-field" name="button" onClick={() => handleClick()}>
              ENVIAR
            </ButtonField>
          </TextAreaContainer>
        </AreaContainer>

        <CardContainer data-testid="container-text">
          <MainGridContainer container>
            {textPost &&
              textPost.map((item, index) => (
                <GridContainer item xs={12} sm={9} md={6} lg={2} xl={3}>
                  <GridTextContainer data-testid="container-text">
                    <GridText item xs={8} sm={12} md={12} lg={12} xl={12}>
                      <GridTextArea>
                        <DateContainer>
                          <img
                            style={{ marginTop: '-13px', width: '24px', height: '24px' }}
                            src={calendar}
                            alt="calendar"
                          />

                          <DatePublished>
                            {moment(item.createdAt).format('DD/MM/YYYY')}
                          </DatePublished>
                        </DateContainer>
                        <UserPublished>
                          <PersonIcon fontSize="large" style={{ color: 'black' }} />
                          {item.author.username}
                        </UserPublished>
                      </GridTextArea>
                      <Divider style={{ background: 'black', marginLeft: '20px' }} />

                      <Content>{item.content}</Content>
                    </GridText>

                    <ReactionContainer>
                      <LovedPress
                        style={{ cursor: 'pointer', marginRight: '4px' }}
                        onClick={() =>
                          handleReaction(item.id, item.activeUserLikedIt, !item.activeUserLovedIt)
                        }
                      >
                        {item.activeUserLovedIt > 0 ? (
                          <img style={{ width: '30px', height: '30px' }} src={loveOn} alt="" />
                        ) : (
                          <img style={{ width: '30px', height: '30px' }} src={loveOff} alt="" />
                        )}
                      </LovedPress>
                      <CountLove>{item.loves}</CountLove>
                      <LikedPress
                        onClick={() =>
                          handleReaction(item.id, !item.activeUserLikedIt, item.activeUserLovedIt)
                        }
                      >
                        {item.activeUserLikedIt > 0 ? (
                          <img style={{ width: '30px', height: '30px' }} src={likeOn} alt="" />
                        ) : (
                          <img style={{ width: '30px', height: '30px' }} src={likeOff} alt="" />
                        )}
                      </LikedPress>
                      <CountLike style={{ fontFamily: 'Poppins' }}>{item.likes}</CountLike>
                    </ReactionContainer>
                  </GridTextContainer>
                </GridContainer>
              ))}
          </MainGridContainer>
        </CardContainer>
      </MainContainer>
    </div>
  );
};

export default Dashboard;
