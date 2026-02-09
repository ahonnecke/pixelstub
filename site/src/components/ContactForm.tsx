import { useState } from "react";

export default function ContactForm() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
		"idle",
	);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget;
		const data = new FormData(form);

		try {
			const res = await fetch("https://formspree.io/f/xvgowzwk", {
				method: "POST",
				body: data,
				headers: { Accept: "application/json" },
			});

			if (res.ok) {
				setStatus("sent");
				form.reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	}

	if (status === "sent") {
		return (
			<div className="form-success">
				<p>Message sent. I'll get back to you soon.</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="contact-form">
			<div className="form-field">
				<label htmlFor="name">Name</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div className="form-field">
				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div className="form-field">
				<label htmlFor="message">Message</label>
				<textarea id="message" name="message" rows={6} required />
			</div>
			<button
				type="submit"
				className="btn btn-primary"
				disabled={status === "sending"}
			>
				{status === "sending" ? "Sending..." : "Send message"}
			</button>
			{status === "error" && (
				<p className="form-error">Something went wrong. Try again or email me directly.</p>
			)}
		</form>
	);
}
