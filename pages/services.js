import styles from '../styles/services.module.css'

export default function Navbar() {
    return (
        <div class={styles.Container}>            
            Standard Cleaning
            <br></br>
            <p>-All Rooms:</p>
            <p>Dusting, wiping down all horizontal surfaces (like tables, desks, cupboards, windows sills) basic organization, Removing cobwebs, vacuuming and mop the floors.</p>
            <p>-Bedrooms:</p>
            <p>making beds, vacuum underneath the bed, clean mirrors.</p>
            <p>-Bathrooms:</p>
            <p>Cleaning the toilet bowl inside and outside, cleaning bathtub, countertops, sink, faucets, mirrors, shower and tile (regular), vacuum and mop the floors.</p>
            <p>-kitchen:</p>
            <p>clean all the countertops (moving or under the stuff), clean the sink, doing the dishes (storage if already clean and dry) wipe down the cabinets outside, clean outside of all appliances and stainless steel polisher, inside the microwave, take out the trash, vacuum and mop the floors.</p>

            <p>Deep Cleaning</p>
            <p>Recommended for houses more than 3 months without a professional cleaning or on the first cleaning.</p>
            <p>All above plus:</p>
            <p>-deep clean the fridge inside</p>
            <p>-deep clean the oven inside</p>
            <p>-scrubbing and degreasing all cabinet outside</p>
            <p>-grout and tile scrubbing</p>
            <p>-windows cleaning inside (hand reachable)</p>
            <p>other project may vary, depending on how hard or on the needs of each customer.</p>
            <p>Move out cleaning</p>
            <br></br>
            <p>All above from the deep cleaning plus:</p>

            <p>-removing spots on the walls (spots not wall washing)</p>
            <p>-cleaning inside all the cabinets</p>
            <p>-hand wiping all the baseboards </p>
            <p>-windows and windows sill washing inside</p>

        </div>
    );
}