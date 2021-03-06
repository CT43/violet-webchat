import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import './style.scss';
import insurmiLogo from 'assets/powered_by_insurmi.svg'

const Conversation = props =>
  <div className="rw-conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      colorTheme={props.colorTheme}
      toggleChat={props.toggleChat}
      toggleFullScreen={props.toggleFullScreen}
      fullScreenMode={props.fullScreenMode}
      showCloseButton={props.showCloseButton}
      showFullScreenButton={props.showFullScreenButton}
      connected={props.connected}
      connectingText={props.connectingText}
      closeImage={props.closeImage}
      profileAvatar={props.profileAvatar}
    />
    <Messages
      profileAvatar={props.profileAvatar}
      params={props.params}
      customComponent={props.customComponent}
      showMessageDate={props.showMessageDate}
    />
    <Sender
      sendMessage={props.sendMessage}
      disabledInput={props.disabledInput}
    />
    <span className="powered-by-insurmi">Powered by <img src={insurmiLogo} alt=""/></span>
  </div>;

Conversation.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  colorTheme: PropTypes.string,
  sendMessage: PropTypes.func,
  profileAvatar: PropTypes.string,
  toggleFullScreen: PropTypes.func,
  fullScreenMode: PropTypes.bool,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  showFullScreenButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  params: PropTypes.object,
  connected: PropTypes.bool,
  connectingText: PropTypes.string,
  closeImage: PropTypes.string,
  customComponent: PropTypes.func,
  isChatOpen: PropTypes.bool,
  showMessageDate: PropTypes.oneOfType([PropTypes.bool, PropTypes.func],
)
};

export default Conversation;
