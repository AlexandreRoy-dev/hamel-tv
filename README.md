# Hamel TV Service

Site web de **Hamel TV Service**, atelier de réparation d’appareils électroniques à Sherbrooke (Québec). Remplace l’ancien site Wix (`hameltv.ca`) : services, avis, horaires, carte et formulaire d’estimation, en français et en anglais.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:43147](http://localhost:43147).

Le site en ligne : [hameltv.roymarketing.ca](https://hameltv.roymarketing.ca/).

Build de production (export statique, déployé sur GitHub Pages) :

```bash
npm run build
npx serve out
```

## Contenu

- Adresse : 2685, rue Galt Ouest, Sherbrooke, QC J1K 1L8
- Téléphone : 819 346-2909
- Courriel : hameltv@videotron.ca
- Horaires : lundi au vendredi, 9 h à 17 h 30

Le formulaire d’estimation exige nom, courriel, téléphone et description du problème. Les envois sont transmis à **alex@roymarketing.ca**. La première fois, FormSubmit envoie un courriel de confirmation à cette adresse : cliquez le lien d’activation pour commencer à recevoir les demandes.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui.
