import express, { response } from 'express';
import { addUser, getHighScore, getUsers, updateUser } from '../controllers/User.js';
import { newConversation, getConversation } from '../controllers/Conversation.js';
import { newMessage, getMessages } from '../controllers/Message.js';


const route = express.Router();
route.get('/',(req,res)=>{return res.json({message:'successfully entered'})});
route.post('/add',addUser);
route.get('/users',getUsers);
route.post('/update',updateUser);
route.post('/score',getHighScore);

route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add',newMessage);
route.get('/message/get/:conversationId',getMessages);

export default route;