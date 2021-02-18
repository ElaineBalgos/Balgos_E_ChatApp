import ChatMessage from "./components/TheMessageComponent.js"

(() => {
    console.log('fired');

    // load the socket library and make connection
    const socket = io();

    // messenger service event handling -> incoming from the manager
    function setUserID({sID, message}) {
        // incoming connected event with the data
        // debugger;
        vm.socketID = sID;
    }

    // Join user to chat
    function userJoin(sID, username) {
    const user = { sID, username};
  
    users.push(users);
  
    return users;
    }
   
    // Get current user
    function getCurrentUser() {
        const user = sessionStorage.key(0);
        document.getElementById("user").innerHTML = sID;
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
            image: "",
            socketID: "",
             // to send
            message: "",
           
        },

        created: function() {
            console.log('its alive!!');
        },

        methods: {
            dispatchMessage() {
                // debugger;
                socket.emit('chatmessage', {content: this.message, name: this.username || "Anonymous"})

                this.message = "";
            }
        },

        components: {
            newmessage: ChatMessage
        }

    }).$mount("#app");

    socket.addEventListener("connected", setUserID);
    socket.addEventListener('message', appendMessage);
})();