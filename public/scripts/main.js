import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

    // load the socket library and make connection
    const socket = io();

    // messenger service event handling -> incoming fromthe manager
    function setUserID({sID, message}) {
        // incoming connected event with the data
        // debugger;
        vm.socketID = sID;
    }

    function appendMessage(message) {
        // debugger;
        vm.messages.push(message);
    }

    const vm = new Vue({
        data: {
            // incoming from the server
            messages: [],
            nickname: "",
            username: "",
            socketID: "",
             // to send
            message: ""
           
        },

        created: function() {
            console.log('its alive!!');
        },

        methods: {
            dispatchMessage() {
                // debugger;
                socket.emit('chatmessage', {content: this.message, name: this.nickname || "Anonymous"})
            }
        },

        components: {
            newmessage: ChatMessage
        }

    }).$mount("#app");

    socket.addEventListener("connected", setUserID);
    socket.addEventListener('message', appendMessage);
})();