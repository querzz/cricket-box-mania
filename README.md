# Cricket Box Mania

Build a real production-quality Telegram Mini App frontend called CRICKET BOX.

IMPORTANT:

This is NOT a design mockup task.

Do NOT create static screenshots.

Build the actual working frontend in code with reusable React components, routing/navigation, state management, animations, responsive layouts and realistic mock data.

I am providing visual reference screenshots. Recreate the visual language and composition, but build the UI as a real application.

==================================================

PRODUCT

==================================================

CRICKET BOX is a seasonal Telegram Mini App based around a beautiful animated prize box.

Each season is a separate event.

Example:

CRICKET BOX #001

01.09 — 14.09

Users can:

- enter the current season;

- receive a free spin;

- open the Cricket Box;

- receive rewards;

- collect internal Cricket Box Stars;

- spend internal Stars on additional spins;

- collect daily gifts;

- view their rewards;

- request withdrawals after the season ends.

The application should feel like a premium mobile game, NOT like a traditional casino.

Visual direction:

dark

moody

glossy

pink / raspberry / black

cute luxury

subtle grunge

glassmorphism

soft glow

3D objects

anime/game-inspired mascot

premium mobile game aesthetic

The attached screenshots are the main visual reference.

==================================================

DESIGN PRINCIPLES

==================================================

Primary hierarchy:

1. Cricket Box

2. Main CTA

3. Current attempts / balance

4. Prize pool

5. Secondary information

Do not overload screens with unnecessary text.

Use generous spacing.

Do not let decorative elements overpower the primary CTA.

Use consistent:

- corner radius

- glass cards

- typography

- shadows

- pink glow

- buttons

- icons

- bottom navigation

The UI should feel premium and polished.

Do not create a generic dashboard or generic SaaS interface.

==================================================

IMPORTANT MOBILE REQUIREMENT

==================================================

Design primarily for Telegram mobile WebApp.

Target viewport:

390x844

The application must also adapt gracefully to:

375x812

412x915

430x932

Desktop support can exist, but mobile is the primary target.

No horizontal scrolling.

All important actions must be reachable with one hand.

Respect Telegram safe areas / bottom areas.

==================================================

NAVIGATION

==================================================

Bottom navigation:

HOME

DRAW

MY PRIZES

PROFILE

Active tab should use the pink accent.

Navigation must actually work.

==================================================

HOME SCREEN

==================================================

Create the main screen based on the reference screenshot.

Elements:

- user avatar

- Cricket Box branding

- internal Stars balance

- gift button

- season countdown

- current season status

- Cricket Box visual

- large "SPIN" CTA

- available attempts

- prize preview

- "See all prizes"

- subscription/participation information

The main Box must feel like the primary object on the screen.

CTA should have subtle glow and press animation.

==================================================

DRAW SCREEN

==================================================

Show:

- Cricket Box

- current season

- available free attempts

- paid spin price if enabled

- internal Stars balance

- spin button

- season countdown

When user presses SPIN:

1. button enters loading state

2. prevent multiple clicks

3. play suspense animation

4. reveal reward

5. show reward modal/screen

6. update mock state

IMPORTANT:

The frontend must be architected so that later the spin result can come from a backend API.

Do NOT implement reward generation as trusted frontend logic.

Use mock API/service abstraction for now.

==================================================

REWARD RESULT

==================================================

Create a premium reward reveal animation.

Examples:

20 Stars

Telegram Premium

NFT

Money

Empty

Reward screen should contain:

"YOU WON"

reward icon/image

reward title

"CLAIM"

secondary action:

"SPIN AGAIN"

The result should feel exciting.

Use subtle particles/glow/scale animations.

==================================================

MY PRIZES

==================================================

Tabs:

ALL

PENDING

RECEIVED

Prize cards contain:

- image

- title

- date

- status

- amount if relevant

Statuses:

PENDING

RECEIVED

PROBLEM

Clicking a reward opens reward details.

==================================================

REWARD DETAIL

==================================================

Show:

reward image

reward title

date won

status

payout information

CTA when applicable

For internal Stars:

show current amount and withdrawal status.

==================================================

WITHDRAWAL

==================================================

Create a withdrawal interface for internal Cricket Box Stars.

Important concept:

Internal Cricket Box Stars are NOT the user's personal Telegram Stars balance.

The UI should clearly communicate this.

Example:

⭐ 320 / 500

Maximum balance:

500 Stars

Show available withdrawal when season rules allow it.

Withdrawal should have:

amount

minimum withdrawal

current available balance

status

confirmation modal

No payment details should be stored in the frontend.

==================================================

PROFILE

==================================================

Profile includes:

avatar

username

participant status

internal Stars balance

Example:

⭐ 125 / 500

Sections:

Leaderboard

Rules

FAQ

Activity History

Support

Settings

Make this screen visually clean.

==================================================

DAILY GIFT

==================================================

Gift button on home screen.

Gift screen:

large 3D gift

"YOUR DAILY GIFT"

OPEN button

availability countdown

After opening:

reward reveal animation.

States:

AVAILABLE

CLAIMED

COOLDOWN

Only active season participants can claim the gift.

==================================================

PRIZE POOL

==================================================

Create a beautiful prize pool section.

Example:

500 UAH

3 remaining

Telegram Premium 3M

2 remaining

Telegram Premium 6M

1 remaining

NFT

2 remaining

20 Stars

10 remaining

The exact data must come from mock data.

Do not hardcode the visual interface to these specific rewards.

==================================================

INTERNAL STARS

==================================================

Important:

The product has an INTERNAL Stars balance.

This is separate from Telegram's real Stars payment system.

Example:

⭐ 125 / 500

Rules:

- users can win internal Stars;

- users can spend internal Stars on additional spins;

- maximum balance is configurable;

- if balance reaches maximum, additional Stars rewards cannot be added;

- spending Stars on a spin frees up capacity immediately.

Example:

500 / 500

↓

spend 15

↓

485 / 500

↓

Stars rewards can be received again.

Architect the frontend around this logic.

Do not introduce another currency such as Cricket Credits.

==================================================

SEASON STATES

==================================================

Support these UI states:

DRAFT

SCHEDULED

ACTIVE

ENDING

CLOSED

PAYOUT

ARCHIVED

The frontend should display different states appropriately.

For example:

ACTIVE:

SPIN enabled

CLOSED:

"Season ended"

PAYOUT:

"Prize distribution in progress"

ARCHIVED:

season history

==================================================

IMPORTANT EDGE CASE SCREENS

==================================================

Create UI states for:

- free spin already used

- insufficient internal Stars

- internal Stars balance full

- season ended

- season not started

- user not subscribed

- gift already claimed

- reward pending

- reward received

- network error

- loading

- transaction processing

- payment processing

- withdrawal pending

These states are part of the product, not optional extras.

==================================================

ANIMATIONS

==================================================

Use tasteful animations.

Important interactions:

- button press

- bottom navigation

- box idle animation

- box opening

- reward reveal

- particles

- modal transitions

- gift opening

- countdown

Animations must not hurt performance on mobile.

Do not overanimate every element.

==================================================

COMPONENT SYSTEM

==================================================

Build reusable components:

CricketBox

PrimaryButton

GlassCard

RewardCard

RewardModal

PrizePool

Countdown

StarsBalance

GiftCard

BottomNavigation

ProfileHeader

StatusBadge

WithdrawalModal

LoadingState

EmptyState

ErrorState

ConfirmModal

Create shared design tokens for:

colors

spacing

radius

shadows

typography

glows

==================================================

DATA ARCHITECTURE

==================================================

Use mock service/API abstraction.

Do not directly hardcode business logic inside UI components.

Prepare interfaces/types for:

User

Season

Prize

Spin

Reward

StarsBalance

Gift

Withdrawal

Frontend should later be able to connect to a real backend without rebuilding the UI.

==================================================

SECURITY ARCHITECTURE

==================================================

Even though this is frontend-only for now:

DO NOT trust frontend state for:

- spin result

- reward amount

- balance

- withdrawal

- payment

- user identity

Create clean service boundaries so these will later be handled by backend.

==================================================

TECHNICAL REQUIREMENTS

==================================================

Use React + TypeScript.

Use a clean component architecture.

Use real navigation/state.

Use responsive CSS.

Keep code modular.

Avoid one huge component.

Use semantic naming.

Make the app easy to extend.

==================================================

VISUAL REFERENCE

==================================================

The supplied screenshots represent the desired visual direction.

IMPORTANT:

Do not merely place the screenshot as an image on the page.

Recreate the interface using actual HTML/CSS/React components.

Use the screenshots as references for:

- layout

- spacing

- composition

- visual hierarchy

- colors

- typography

- card shapes

- button style

- navigation

- reward presentation

==================================================

ASSET HANDLING

==================================================

For major visual assets such as:

- mascot

- Cricket Box

- reward 3D icons

- gift box

create reusable image asset slots/components.

Do not distort images.

Use object-fit appropriately.

Keep the UI functional even if some final production assets are replaced later.

==================================================

FINAL GOAL

==================================================

The result should feel like a real premium Telegram Mini App, not a prototype.

The user should be able to navigate through the complete frontend flow:

Home

→ Draw

→ Spin

→ Reward reveal

→ My prizes

→ Reward details

→ Profile

→ Daily Gift

→ Withdrawal

All UI interactions must work using realistic mock state.

Do not build the backend yet.

Build the frontend so it is ready to connect to one later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/501bb794-a8a8-46dd-817d-bc33aa167146).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
