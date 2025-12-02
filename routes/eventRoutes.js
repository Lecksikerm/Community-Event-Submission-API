import express from 'express';
import {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
} from '../controllers/eventController.js';

import { eventValidationRules, validateEvent } from '../validators/eventValidator.js';

const router = express.Router();

router.post('/', eventValidationRules, validateEvent, createEvent);

router.put('/:id', eventValidationRules, validateEvent, updateEvent);

router.get('/', getEvents);
router.get('/:id', getEventById);
router.delete('/:id', deleteEvent);

export default router;


