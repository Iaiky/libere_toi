<template>
    <HeaderVue/>
    <div class="Chat">
        <div class="Chat-container">

            <!-- LeftSide -->
            <ChatList/>


            <!-- RightSide -->
            <ChatMessage/>
            
        </div>
    </div>

</template>

<script>
    import HeaderVue from '../../components/HeaderVue.vue'
    import ChatList from './ChatList.vue'
    import ChatMessage from './ChatMessage.vue'
    
    export default {
        name:'ChatVue',
        components : {
            HeaderVue,
            ChatList,
            ChatMessage
        },
        data() {
            return {
                layout : 'active',
                username :'',
                usertype :'',
                userPDP :''
            }
        },
        methods : {
            
        },
        async created(){
            let users = localStorage.getItem('user-info');
            this.user = users;           
            this.username = JSON.parse(users).data[0].prenom;
            this.usertype= JSON.parse(users).data[0].type;
            this.userPDP= JSON.parse(users).data[0].photoProfil;
        },
    }

</script>

<style >
    .Chat {
        width: 85%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: #ffffffc4;
        /* min-height: 80vh; */
        /* max-height: 80vh; */
        align-self: center;
        /* padding: 0.5rem; */
        border-radius: 10px;
        gap: 3px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
    }

    .Chat-container {
        position: relative;
        width: 1396px;
        /* width: 980px; */
        max-width: 100%;
        height: calc(90vh - 40px);
        background-color: #fffefe;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06), 2px 5px 0 rgba(0, 0, 0, 0.06);
        display: flex;
    }

    .Chat-container .leftSide {
        position: relative;
        flex: 30%;
        background: #ffffff;
        border-right: 1px solid rgba(0, 0, 0, 0.02);
    }

    .Chat-container .rightSide {
        position: relative;
        flex: 70%;
        background: #e5ddd5;
    }

    .Chat-container .rightSide::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url();
        opacity: 0.06;
    }

    .Chat-container .header {
        width: 100%;
        height: 60px;
        background: #dedede;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
    }

    .Chat-container .userimg {
        position: relative;
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
    }

    .Chat-container .userimg .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

    .Chat-container .header .nav_icons {
        display: flex;
    }

    .Chat-container .header .nav_icons li {
        display: flex;
        list-style: none;
        cursor: pointer;
        color: #51585c;
        font-size: 1.5em;
        margin-left: 22px;
    }

    .Chat-container .leftSide .search_chat {
        position: relative;
        width: 100%;
        height: 50px;
        background: #f6f6f6;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
    }

    .Chat-container .leftSide .search_chat div {
        width: 100%;
    }

    .Chat-container .leftSide .search_chat div input {
        width: 100%;
        outline: none;
        border: none;
        background: #fff;
        padding: 6px;
        height: 38px;
        border-radius: 30px;
        font-size: 14px;
        padding-left: 40px;
    }
    .Chat-container .leftSide .search_chat div input::placeholder{
        color: #bbb;
    }

    .Chat-container .leftSide .search_chat div i {
        position: absolute;
        left: 30px;
        top: 15px;
        font-size: 1.2em;
    }

    .Chat-container .leftSide .chatlist {
        position: relative;
        height: calc(100% - 110px); /*60header + 50search=110*/ 
        overflow-y: auto;
    }

    .Chat-container .leftSide .chatlist .block {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        cursor: pointer;
    }
    .Chat-container .leftSide .chatlist .block.active {
        background: #ebebeb;
    }
    .Chat-container .leftSide .chatlist .block:hover {
        background: #f5f5f5;
    }

    .Chat-container .leftSide .chatlist .block .imgbox {
        position: relative;
        min-width: 45px;
        max-width: 45px;
        height: 45px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 10px;
    }

    .Chat-container .leftSide .chatlist .block .details {
        position: relative;
        width: 100%;
    }

    .Chat-container .leftSide .chatlist .block .details .listHead {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    .Chat-container .leftSide .chatlist .block .details .listHead h4 {
        font-size: 1.1em;
        font-weight: 600;
        color: #111;
        /* margin-top: -5px; */
    }

    .Chat-container .leftSide .chatlist .block .details .listHead .time {
        font-size: 0.75em;
        color: #aaa;
    }
    .Chat-container .leftSide .chatlist .block.active .details .listHead .time {
        color: #111;
    }
    .Chat-container .leftSide .chatlist .block.unread .details .listHead .time {
        color: #ac1282;
    }

    .Chat-container .leftSide .chatlist .block .details .message_p {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Chat-container .leftSide .chatlist .block .details .message_p p {
        color: #aaa;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        font-size: 0.9em;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: -15px;
    }

    .Chat-container .leftSide .chatlist .block .details .message_p b {
        background: #ac1282;
        color: #fff;
        min-width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75em;
    }

    .Chat-container .imgText {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Chat-container .imgText h4 {
        font-weight: 500;
        line-height: 1.2em;
        margin-left: 15px;
    }

    .Chat-container .imgText h4 span {
        font-size: 0.8em;
        color: #555;
    }


    /* ChatBox */
    .Chat-container .chatBox {
        position: relative;
        width: 100%;
        height: calc(100% - 120px); /*60 px header + 60px textarea footer */
        padding: 15px 50px;
        overflow-y: auto;
    }

    .Chat-container .messages {
        position: relative;
        display: flex;
        width: 100%;
        margin: -20px 0;
    }

    .Chat-container .messages p {
        position: relative;
        right: 0;
        text-align: right;
        max-width: 65%;
        padding: 12px;
        background: #f8c6f0;
        border-radius: 10px;
        font-size: 0.9em;
    }

    .Chat-container .messages p::before {
        content: '';
        position: absolute;
        top: 0;
        right: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #f8c6f0 0%, #f8c6f0 50%, transparent 50%, transparent);
    }

    .Chat-container .messages p span {
        display: block;
        margin-top: 5px;
        font-size: 0.85em;
        opacity: 0.5;
    }

    .Chat-container .my-message {
        justify-content: flex-end;
    }

    .Chat-container .frnd-message {
        justify-content: flex-start;
    }

    .Chat-container .frnd-message p {
        background: #fff;
        text-align: left;
    }

    .Chat-container .messages.frnd-message p::before {
        content: '';
        position: absolute;
        top: 0;
        left: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient(225deg, #fff 0%, #fff 50%, transparent 50%, transparent);
    }

    .Chat-container .chatbox-input {
        position: relative;
        width: 100%;
        height: 60px;
        background: #f0f0f0;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Chat-container .chatbox-input i {
        cursor: pointer;
        font-size: 1.8em;
        color: #51585c;
    }

    .Chat-container .chatbox-input i:hover {
        cursor: pointer;
        font-size: 1.9em;
        color: #51585c;
    }

    .Chat-container .chatbox-input i:nth-child(1){
        margin-right: 15px;
    }

    .Chat-container .chatbox-input input {
        position: relative;
        width: 90%;
        margin: 0 20px;
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 30px;
        font-size: 1em;
    }
</style>