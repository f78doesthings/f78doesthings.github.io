---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Home
layout: page
date_modified: 2025/03/14
---

# Home

Hi! I'm f78, a 21-year-old guy from Belgium who likes to play games like [Minecraft](https://www.minecraft.net/en-us){:target='_blank'}{:rel='noopener noreferrer'} and [Terraria](https://www.terraria.org/){:target='_blank'}{:rel='noopener noreferrer'}, code things and make music. I'm currently spending most of my time studying programming at college<span class="asterisk">*</span>.

<p class="small"><span class="asterisk">*</span>: Translated from "hogeschool" in Dutch according to Google Translate. I'm not sure if this is accurate, as school names in English vs. Dutch confuse me...</p>

<nav class="home-socials socials">
    <h2>My Socials</h2>
    <p>Please keep in mind that I'm busy with college, so I'm unable to actively make content for the time being.</p>
    <ul class="menu">
        {%- for social in site.pages -%}
            {%- if social.social_title or social.redirect_to -%}
                <li>
                    <a
                        class="page-link"
                        href="{{ social.url | relative_url }}"
                        {% if social.redirect_to %}
                            target="_blank"
                            rel="noopener noreferrer"
                        {% endif %}
                    >
                        {%- if social.icon -%}
                            <i class="menu-item-icon {{ social.icon | escape }}"></i>
                        {%- endif -%}
                        <h3 class="menu-item-title">
                            {{ social.social_title | default: social.title | escape }}
                        </h3>
                        {%- if social.description -%}
                            <p class="menu-item-description">
                                {{ social.description | escape }}
                            </p>
                        {%- endif -%}
                    </a>
                </li>
            {%- endif -%}
        {%- endfor -%}
    </ul>
</nav>

## Using My Music

All of my music is licenced under a <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a> licence (unless stated otherwise). This means you are free to include it in your own content (which may also be monetised), as long as you credit me in some way. Check the licence for more information.

**Tip:** If you want to download my music for offline listening or including it in your content, you can find high-quality (320kbps) MP3 files <a href="https://drive.google.com/drive/folders/1sAmqC1Xjgu3Jn6XMvfPQ5cBcg8FnF-j2?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a>.
