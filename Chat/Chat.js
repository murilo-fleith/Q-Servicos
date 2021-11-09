import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import firestore from 'firebase';

import { GiftedChat, Bubble } from 'react-native-gifted-chat';

//var database = firebase.firestore();

function Chat(props) {

    const [user, setUser] = useState(props.navigation.getParam('userChat'));

    const [messages, setMessages] = useState([]);

    useEffect(() => {

        console.log(user);

        const database = firestore();

        database.collection('groupChat')

            .orderBy('createdAt', 'desc')

            .onSnapshot(function (doc) {

                let receivedMessages = [];

                doc.docs.map(doc => {

                    receivedMessages.push({

                        _id: doc.id,

                        ...doc.data(),

                    });

                });

                setMessages(GiftedChat.append(messages, receivedMessages));

            });

    }, [user]);



    function onSend([messages]) {

        firestore()

            .collection('groupChat')

            .add(messages);

    }

    function renderBubble(props) {

        return (

            <View>

                <Text style={{ left: 90 }}>{props.currentMessage.user.name}</Text>

                <Bubble

                    {...props}

                />

            </View>

        );

    }

    return (

        <GiftedChat

            dateFormat={'DD-MM-YYYY'}

            timeFormat={'h:mm'}

            renderBubble={renderBubble}

            messages={messages}

            onSend={messages => onSend(messages)}

            user={{

                id: user.id,

                name: user.firstName.localized.pt_BR,

            }}

        />

    );

}

Chat.navigationOptions = {

    title: 'Chat',

};

export default Chat;
