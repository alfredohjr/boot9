import { startOfDay, endOfDay, parseISO } from 'date-fns';
import { Op } from 'sequelize';

import User from '../models/User';
import Appointment from '../models/Appointment';

class ScheduleController {

  async index(req, res) {
    const checkUserProvider = await User.findOne({
      where: {id: req.userId, provider: true},
    });
    
    if(!checkUserProvider){
      return res.json(401).json({error: 'User is not provider'});
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);
    console.log(parsedDate);
    const appointments = await Appointment.findAll({
      where: {
        appointment_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]:[startOfDay(parsedDate),endOfDay(parsedDate)],
        },
      },
      include:[
        {
          model: User,
          as: 'provider',
          attributes: ['id','name'],
        }
      ],
      order: ['date'],
    });

    return res.json(appointments);
  }

}

export default new ScheduleController();