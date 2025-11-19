# M-ta-Prototype-X-Algorithm
prototype modulator in % of subjects seen on X
# Progressive Exposure Control Prototype (xAI/Grok Challenge)

This repository contains the prototype for a new user-controlled exposure algorithm on Platform X, designed to mitigate filter bubbles while maximizing user autonomy. The strategy is based on a progressive shift toward a 40/60 Noise/Targeted content ratio.

## Files

1.  **`user_exposure_algorithm_prototype_pascal.json`**: Defines the three deployment phases and the structured input for user settings.
2.  **`modulator_logic_directive.js`**: Provides the high-level functional logic for interpreting the JSON parameters and assembling the final feed.

## Core Concepts

### 1. Progressive Deployment Strategy

The system is designed to transition users through three phases to ensure adaptation and maximize data collection on engagement with non-targeted content:

| Phase | Noise (Non-Targeted) | Targeted (User Control) | Rationale |
| :--- | :--- | :--- | :--- |
| **PHASE 1** | 60% | 40% | Re-education, maximizing exposure to new content. |
| **PHASE 2** | 50% | 50% | Equilibrium point, soft transition. |
| **PHASE 3** | 40% | 60% | Controlled Ideal. Ensures 60% user control while maintaining a healthy 40% baseline for platform serendipity. |

### 2. User Sovereignty over Topics

The `topic_preferences` values (`[USER_DEFINED_RELATIVE_PCT]`) are entirely controlled by the user via an internal platform menu. These are **relative** percentages that must sum to 100, which are then applied to the total `Targeted (T)` content allocation for the current phase.

### 3. Featured Post Interruption (Kissing Cam Logic)

The `featured_post_frequency` parameter dictates a hard insertion (e.g., 1/hour) of platform-curated content, independent of the Noise/Targeted allocation, ensuring key platform announcements or high-priority content are seen.

***

