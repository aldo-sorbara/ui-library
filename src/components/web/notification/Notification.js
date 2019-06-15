import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Wrapper,
  Headline,
  Description
} from '@bit/wenance.common-ui.web.global';
import { Grid } from '@bit/wenance.common-ui.web.grids';
import { List, ListItem } from '@bit/wenance.common-ui.web.list';
import { ButtonContainer } from '@bit/wenance.common-ui.web.button';
import styled from 'styled-components';

const defaultIcon = () => (
  <IconContainer>
    <svg viewBox='0 0 50 50' style={{ width: '100px', height: '100px' }}>
      <circle cx='25' cy='25' r='25' fill='#7ed321' />
      <path
        fill='none'
        stroke='#fff'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        d='M38 15L22 33l-10-8'
      />
    </svg>
  </IconContainer>
);

const selectAsset = (imageUrl, icon) => {
  if (imageUrl) {
    return <img src={imageUrl} style={{ minHeight: 202, marginBottom: 16 }} />;
  } else if (icon) {
    return <IconContainer>{icon}</IconContainer>;
  }
  return defaultIcon();
};
const Notification = props => {
  const {
    header,
    subHeader,
    content,
    imageUrl,
    icon,
    action,
    data,
    padding
  } = props;
  return (
    <NotificationContainer {...props}>
      <Container>
        <Wrapper padding={padding} textAlign='center'>
          {selectAsset(imageUrl, icon)}
          <HeadlineContainer>
            <Headline data-w='notification_title'>{header}</Headline>
          </HeadlineContainer>
          <DescriptionContainer>
            <Description
              style={{ fontSize: '1rem' }}
              data-w='notification_subtitle'
            >
              {subHeader}
            </Description>
            {content && (
              <Description data='notification_content'>{content}</Description>
            )}
          </DescriptionContainer>

          {data && (
            <Grid lg={100} md={100} sm={100} xs={100} data='notification'>
              <List
                data='notification_list'
                style={{ textAlign: 'left', fontSize: '0.75rem' }}
              >
                {data.map(({ text, link }, key) => (
                  <ListItem key={key}>
                    {text}&nbsp;
                    {link && (
                      <a target='_blank' href={link.url}>
                        {link.text}
                      </a>
                    )}
                  </ListItem>
                ))}
              </List>
            </Grid>
          )}
        </Wrapper>
      </Container>
      {action && <ActionContainer>{action}</ActionContainer>}
    </NotificationContainer>
  );
};

Notification.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  icon: PropTypes.node,
  action: PropTypes.node,
  data: PropTypes.array
};

Notification.defaultProps = {
  imageUrl: null,
  icon: null,
  content: null,
  data: null,
  action: null
};

const ActionContainer = styled(ButtonContainer)`
  /* stylelint-disable no-empty-block */
`;

const NotificationContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  ${props =>
    props.imageUrl && {
      backgroundImage: 'linear-gradient(to bottom, #ffffff 70%, #ffedd4 100%)'
    }}
  padding: 0 3rem 4.5rem 3rem;
`;

const HeadlineContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const DescriptionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.75rem 0 1.75rem;
`;

const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 4.75rem;
  justify-content: center;
`;

export default Notification;
