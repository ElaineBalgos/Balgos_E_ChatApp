export default {
    props: ['icon', 'socketid'],

    template:
    `
    <article class="new-icon" :class="{ 'my-icon' : matchedID }">
        <img :src='"image/" + icon.message.image' alt="">
        <p>{{msg.message.content}}</p>
    </article>
    `,
    
    data: function() {
        return {
            matchedID: this.socketid == this.msg.id
        }
    }
}

