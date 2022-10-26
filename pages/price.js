import styles from '../styles/price.module.css'

export default function price() {
    return (
        <div className={styles.Container}>
            <div className="contact-form bg-p p-2">
                <h2 className="m-heading text-b">Contact Us</h2>
                <p className="text-b ">Please Use The Form Below To Contact Us</p>
                <form className={styles.Container_form} action="/send-data-here" method="post">
                    <div className={styles.Container_form_group}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Name"/>
                    </div>
                    <div className={styles.Container_form_group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email"/>
                    </div>
                    <div className={styles.Container_form_group}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="Enter Phone Number"/>
                    </div>
                    <div className={styles.Container_form_group}>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Type Message"></textarea>
                    </div>
                    <input type="submit" className="btn btn-success"/>
                </form>
            </div>
        </div>
    );
}