export default {
    props: ['msg', 'username', 'socketid'],

    template:
    `
    <article class="new-message" :class="{ 'my-message' : matchedID }">
        <h1>{This is a message}</h1>
        <h4>{{msg.username}} says:</h4>
        <p>{{msg.message.content}}</p>
    </article>
    `,
    
    data: function() {
        return {
            matchedID: this.socketid == this.msg.id
        }
    }
}

