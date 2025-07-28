# Homebridge August Locks with Garage Accessory

[![npm](https://img.shields.io/npm/v/homebridge-august-locks-garage)](https://www.npmjs.com/package/homebridge-august-locks-garage)
[![GitHub](https://img.shields.io/github/license/jstroins/homebridge-august-locks-garage)](https://github.com/jstroins/homebridge-august-locks-garage)

A Homebridge plugin that integrates August Smart Locks into HomeKit — now with an optional *Garage Door Accessory* for CarPlay users.

---

### 🔧 Features

- Control your August Smart Lock via HomeKit
- **Optional** Garage Door accessory that acts as a proxy for the lock
- Unlock your home from CarPlay using the Garage Door tile
- Built-in logging and token persistence
- Compatible with most August lock models and bridges

---

### 📦 Installation

Install via Homebridge UI (recommended), or use npm:

```bash
sudo npm install -g homebridge-august-locks-garage
```

---

### ⚙️ Configuration

Add the following to your Homebridge `config.json`:

```json
{
  "platform": "AugustLocksGarage",
  "name": "August Locks",
  "email": "your@email.com",
  "password": "yourAugustAccountPassword",
  "installGarageAccessory": true
}
```

**Options:**

| Key                   | Type    | Required | Description                                            |
|------------------------|---------|----------|--------------------------------------------------------|
| `email`                | string  | ✅        | August account email                                   |
| `password`             | string  | ✅        | August account password                                |
| `installGarageAccessory` | boolean | ❌        | If `true`, adds a second Garage Door accessory         |

---

### 🚗 Why a Garage Accessory?

Apple's CarPlay does **not** allow unlocking doors via Siri or Home. By adding a Garage Door accessory that mimics lock status, you can:

- Lock/unlock your front door from CarPlay
- Use the native Garage Door interface to control access

---

### 🧪 Roadmap

- ✅ Initial working plugin
- 🔜 Token refresh and error handling improvements
- 🔜 MQTT support for bridge-free mode

---

### 🙏 Credits

This plugin is a fork of [nnance/homebridge-august-locks](https://github.com/nnance/homebridge-august-locks), with new features and CarPlay support by [@jstroins](https://github.com/jstroins)

---

### 📄 License

[MIT](LICENSE)
