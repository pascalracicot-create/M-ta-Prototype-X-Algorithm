// MODULATOR EXECUTION LOGIC: Function to assemble the user feed based on settings.

function generate_user_feed(settings) {
    
    // 1. Calculate Target/Noise Percentages
    const NOISE_PCT = settings.noise_allocation_pct; // e.g., 60 (Phase 1)
    const TARGETED_PCT = 100 - NOISE_PCT;           // e.g., 40 (Phase 1)

    // 2. Select Noise Content (N)
    const noise_posts = fetch_random_unfiltered_posts(NOISE_PCT);

    // 3. Select Targeted Content (T)
    const targeted_posts = [];
    
    // Iterate over targeted topics and calculate absolute allocation
    for (const [topic, relative_pct] of Object.entries(settings.topic_preferences)) {
        // Calculate absolute percentage (e.g., 40% of 40% total targeted = 16% of total feed)
        const absolute_pct = (relative_pct / 100) * TARGETED_PCT;
        
        // Fetch posts for this specific topic
        const topic_posts = fetch_posts_by_topic(topic, absolute_pct);
        targeted_posts.push(...topic_posts);
    }
    
    // 4. Combine and Rank (T + N)
    let final_feed = combine_and_rank_posts([...noise_posts, ...targeted_posts], settings.priority_ranking);

    // 5. Insert Featured Posts (Hard Interrupt)
    final_feed = insert_featured_posts(final_feed, settings.featured_post_frequency);

    return final_feed;
}
