const express = require('express');
const cors = require('cors');
const path = require('path');
const Datastore = require('nedb-promises');

const app = express();
const PORT = 5000;

// Database
const db = {
  contacts: Datastore.create({ filename: path.join(__dirname, 'data', 'contacts.db'), autoload: true }),
  donations: Datastore.create({ filename: path.join(__dirname, 'data', 'donations.db'), autoload: true }),
  subscribers: Datastore.create({ filename: path.join(__dirname, 'data', 'subscribers.db'), autoload: true }),
  volunteers: Datastore.create({ filename: path.join(__dirname, 'data', 'volunteers.db'), autoload: true }),
  messages: Datastore.create({ filename: path.join(__dirname, 'data', 'messages.db'), autoload: true }),
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact Form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }
    const doc = await db.contacts.insert({ name, email, phone, subject, message, createdAt: new Date() });
    res.json({ success: true, id: doc._id, message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await db.contacts.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Donation
app.post('/api/donate', async (req, res) => {
  try {
    const { name, email, phone, amount, cause } = req.body;
    if (!name || !email || !amount) {
      return res.status(400).json({ error: 'Name, email and amount are required' });
    }
    const doc = await db.donations.insert({ name, email, phone, amount: Number(amount), cause, createdAt: new Date() });
    res.json({ success: true, id: doc._id, message: 'Donation recorded successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all donations
app.get('/api/donations', async (req, res) => {
  try {
    const donations = await db.donations.find({}).sort({ createdAt: -1 });
    const total = donations.reduce((sum, d) => sum + d.amount, 0);
    res.json({ donations, total });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Newsletter Subscribe
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const existing = await db.subscribers.findOne({ email });
    if (existing) return res.status(400).json({ error: 'Already subscribed' });

    const doc = await db.subscribers.insert({ email, name, createdAt: new Date() });
    res.json({ success: true, message: 'Subscribed successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Volunteer Registration
app.post('/api/volunteer', async (req, res) => {
  try {
    const { name, email, phone, city, interests, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const doc = await db.volunteers.insert({ name, email, phone, city, interests, message, createdAt: new Date() });
    res.json({ success: true, id: doc._id, message: 'Registration successful!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all volunteers
app.get('/api/volunteers', async (req, res) => {
  try {
    const volunteers = await db.volunteers.find({}).sort({ createdAt: -1 });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Dashboard Stats
app.get('/api/stats', async (req, res) => {
  try {
    const contacts = await db.contacts.count({});
    const donations = await db.donations.count({});
    const donationTotal = (await db.donations.find({})).reduce((s, d) => s + d.amount, 0);
    const subscribers = await db.subscribers.count({});
    const volunteers = await db.volunteers.count({});
    res.json({ contacts, donations, donationTotal, subscribers, volunteers });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve static files in production
app.use(express.static(path.join(__dirname, '../client/dist')));

// SPA fallback - Express 5 syntax
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
