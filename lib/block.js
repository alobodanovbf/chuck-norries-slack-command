function sectionBlock({ icon_url, value, id }) {
  return {
    blocks: [
      {
        type: "section",
        block_id: id,
        text: {
          type: "mrkdwn",
          text: value,
        },
        accessory: {
          type: "image",
          image_url: icon_url,
          alt_text: "chuck norris",
        },
      },
    ],
  };
}

module.exports = { sectionBlock };
