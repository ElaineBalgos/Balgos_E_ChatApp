export default {
    props: ['msg', 'username', 'socketid'],

    template:
    `
    <article class="new-message" :class="{ 'my-message' : matchedID }">
        <h1>{This is a message}</h1>
        <img :src='"image/" + msg.message.image' alt="">
        <h4>{{msg.message.username}} says:</h4>
        <p>{{msg.message.content}}</p>
    </article>
    `,
    
    data: function() {
        return {
            matchedID: this.socketid == this.msg.id
        }
    }
}

