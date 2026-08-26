# Hamel TV Service

Site web de **Hamel TV Service**, atelier de réparation d’appareils électroniques à Sherbrooke (Québec). Remplace l’ancien site Wix (`hameltv.ca`) : services, avis, horaires, carte et formulaire d’estimation, en français et en anglais.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:43147](http://localhost:43147).

Build de production :

```bash
npm run build
npm start
```

## Contenu

- Adresse : 2685, rue Galt Ouest, Sherbrooke, QC J1K 1L8
- Téléphone : 819 346-2909
- Courriel : hameltv@videotron.ca
- Horaires : lundi au vendredi, 9 h à 17 h 30

Le formulaire d’estimation valide les champs et les enregistre dans les logs du serveur. Aucun service courriel n’est branché pour l’instant : branchez Resend, Formspree ou un relais SMTP avant la mise en ligne.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
