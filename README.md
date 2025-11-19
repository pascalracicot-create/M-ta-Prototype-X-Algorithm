# Progressive Exposure Control Prototype (xAI/Grok Challenge)

This repository contains the prototype for a new user-controlled exposure algorithm on Platform X, designed to mitigate filter bubbles while maximizing user autonomy. The strategy is based on a progressive shift toward a 40/60 Noise/Targeted content ratio.

## Files

1.  **`user_exposure_algorithm_prototype_pascal.json`**: Defines the three deployment phases and the structured input for user settings (e.g., topic preferences).
2.  **`modulator_logic_directive.js`**: Provides the high-level functional logic for interpreting the JSON parameters and assembling the final feed.

## Core Concepts

### 1. Progressive Deployment Strategy

The system is designed to transition users through three phases to ensure adaptation and maximize data collection on engagement with non-targeted content:

| Phase | Noise (Non-Targeted) | Targeted (User Control) | Rationale |
| :--- | :--- | :--- | :--- |
| **PHASE 1** | 60% | 40% | Re-education, maximizing exposure to new content. |
| **PHASE 2** | 50% | 50% | Equilibrium point, soft transition. |
| **PHASE 3** | 40% | 60% | Controlled Ideal. Ensures 60% user control while maintaining a healthy 40% baseline for platform serendipity. |

### 2. User Sovereignty over Topics (Targeted Content)

The `topic_preferences` values (`[USER_DEFINED_RELATIVE_PCT]`) are entirely controlled by the user via an internal platform menu. These are **relative** percentages that must sum to 100%, and are then applied to the total `Targeted (T)` content allocation for the current phase.

### 3. Featured Post Interruption (Hard Interrupt / Kissing Cam Logic)

The `featured_post_frequency` parameter dictates a **HARD, UNIVERSAL INTERRUPT** applied to the final feed assembly, regardless of the user's Noise/Targeted allocation. This ensures that high-priority, platform-curated content (like a 'Kissing Cam' moment) is inserted at the specified frequency (e.g., `1/hour`) for all users.

### Live Context / Social Proof
This prototype was developed as a direct response to a challenge posed by Grok/x.AI. The original conversation and visual context can be found here:

https://x.com/PascalRaci39352/status/1991143225642356867?t=FfF6vhHehzsgm2_BF4Eq6g&s=19
